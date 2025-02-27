/**
 * 原理：每一轮都把最大的数放到最后
 * @returns
 */
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
  return this;
};
let arr = new Array(10000).fill("");
arr.forEach((item, idx) => {
  arr[idx] = 100000 * Math.random().toFixed(5);
});
console.time("x");
console.log(arr.bubbleSort());
console.timeEnd("x");
//用时：439ms
