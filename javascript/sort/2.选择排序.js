/**
 * 原理：每次把最小的数字放到第一个 （冒泡排序反过来）
 */
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j;
      }
    }
    [this[i], this[minIndex]] = [this[minIndex], this[i]];
  }
  return this;
};
let arr = new Array(10000).fill("");
arr.forEach((item, idx) => {
  arr[idx] = 100000 * Math.random().toFixed(5);
});
console.time("x");
console.log(arr.selectionSort());
console.timeEnd("x");
//用时：132ms
