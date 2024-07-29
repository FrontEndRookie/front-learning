import runMicrotask from "./microTask.js";
import isPromise from "./isPromise.js";
const Pending = "pending";
const Fullfilled = "fullfilled";
const Rejected = "rejected";

class MyPromise {
  constructor(executor) {
    this.state = Pending;
    this.value = null;
    this.handlers = [];
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }
  /**
   * 处理状态变更
   * @param {String} newState 变更的状态
   * @param {any} value 状态变更的数据
   */
  _changeState(newState, value) {
    if (this.state !== Pending) return;
    this.state = newState;
    this.value = value;
    this._runHandler();
  }
  /**
   * 标记任务已完成
   * @param {any} value 任务完成的数据
   */
  _resolve(value) {
    this._changeState(Fullfilled, value);
  }
  /**
   * 标记任务已失败
   * @param {any} value 任务失败的数据
   */
  _reject(value) {
    this._changeState(Rejected, value);
  }
  /**
   * Promise A+ 规范的then方法
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   * @returns
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((res, rej) => {
      this._pushHandler(onFulfilled, Fullfilled, res, rej);
      this._pushHandler(onRejected, Rejected, res, rej);
      this._runHandler();
    });
  }
  /**
   * then函数代执行队列
   * @param {Function} executor
   * @param {String} state
   * @param {Function} resolve
   * @param {Function} reject
   */
  _pushHandler(executor, state, resolve, reject) {
    this.handlers.push({
      executor,
      state,
      resolve,
      reject,
    });
    // console.log(this.handlers);
  }
  /**
   *
   * 根据实际情况 执行队列
   */
  _runHandler() {
    if (this.state === Pending) return;
    while (this.handlers[0]) {
      let handler = this.handlers.shift();
      this._runOneHandler(handler);
    }
  }
  /**
   * 处理一个handler
   * @param {Object} handler
   */
  _runOneHandler({ executor, state, resolve, reject }) {
    runMicrotask(() => {
      if (state !== this.state) {
        return;
      }
      try {
        if (typeof executor !== "function") {
          this.state === Fullfilled ? resolve(this.value) : reject(this.value);
        } else {
          let result = executor(this.value);
          if (isPromise(result)) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * catch就是只接收错误回调的then函数
   * @param {Function} onRejected
   * @returns  返回一个Promise对象
   */
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  /**
   *
   * @param {Function} onFinally
   * @returns 报错返回报错的promise对象否则返回直接的promise
   */
  myfinally(onFinally) {
    try {
      onFinally();
      return this;
    } catch (error) {
      return this._reject(error);
    }
  }
  finally(onFinally) {
    return this.then(
      (data) => {
        onFinally();
        return data;
      },
      (reason) => {
        onFinally();
        throw reason;
      }
    );
  }
  /**
   * 返回一个已完成的promise
   * 特殊情况：
   * 1。value是promise 则直接返回
   * 2. value是thenable对象 则调用then返回一个promise对象
   * 其余直接resolve返回一个promise对象
   * @param {*} value
   * @returns
   */
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((res, rej) => {
      if (isPromise(value)) {
        value.then(res, rej);
      } else {
        res(value);
      }
    });
  }
  /**
   * 得到一个被拒绝的promise
   * @param {any} reason
   * @returns
   */
  static reject(reason) {
    return new MyPromise((res, rej) => {
      rej(reason);
    });
  }
  /**
   *
   * @param {Iterator} promises
   * @returns
   */
  static all(promises) {
    return new MyPromise((res, rej) => {
      try {
        let result = [];
        let count = 0;
        let len = promises.length;
        if (len === 0) {
          res(result);
        }
        for (let i = 0; i < len; i++) {
          MyPromise.resolve(promises[i]).then((data) => {
            count++;
            result[i] = data;
            if (count === len) {
              res(result);
            }
          }, rej);
        }
      } catch (error) {
        rej(error);
        console.log(error);
      }
    });
  }
  /**
   * 处理promises后,调用 all方法
   * @param {Iterator} promises
   */
  static allSettled(promises) {
    let ps = [];
    for (let i of promises) {
      ps.push(
        MyPromise.resolve(i).then(
          (value) => ({ status: Fullfilled, value }),
          (reason) => ({ status: Rejected, reason })
        )
      );
    }
    return MyPromise.all(ps);
  }
  /**
   * 返回最先有结果的promise
   * @param {Iterator} proms
   */
  static race(proms) {
    return new MyPromise((resolve, reject) => {
      for (const p of proms) {
        MyPromise.resolve(p).then(resolve, reject);
      }
    });
  }
}

MyPromise.race([
  MyPromise.resolve(1),
  new MyPromise((res, rej) => {
    setTimeout(() => rej(2), 2000);
  }),
  MyPromise.resolve(3),
  4,
])
  .then((data) => {
    console.log(111, data);
  })
  .catch((err) => {
    console.log(222, err);
  });
