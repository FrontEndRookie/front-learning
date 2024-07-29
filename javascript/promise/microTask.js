let timeFunc = "";
(() => {
  if (process && process.nextTick) {
    timeFunc = function (cb) {
      process.nextTick(cb);
    };
  } else if (MutationObserver) {
    timeFunc = function (cb) {
      let div = document.createElement("div");
      let observer = new MutationObserver(cb);
      observer.observe(div, { childList: true });
    };
  } else if (setImmediate) {
    timeFunc = function (cb) {
      setImmediate(cb);
    };
  } else {
    timeFunc = function (cb) {
      setTimeout(cb, 0);
    };
  }
})();

/**
 * 运行一个微队列任务，将传递的回调函数放入微队列中
 * @param {Function} callback
 */
function runMicrotask(callback) {
  timeFunc(callback);
}

export default runMicrotask;
