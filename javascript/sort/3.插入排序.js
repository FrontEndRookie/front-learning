/**
 * 原理：每一次都和前一个数比较，直到前一个数比当前数小，插入该位置
 * 比冒泡/选择排序性能都要好
 */

Array.prototype.insertionSort = function () {
  for (let i = 0; i < this.length; i++) {
    let temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }
    this[j] = temp;
  }
  return this;
};
let arr = new Array(10000).fill("");
arr.forEach((item, idx) => {
  arr[idx] = 100000 * Math.random().toFixed(5);
});
console.time("x");
console.log(arr.insertionSort());
console.timeEnd("x");
//用时：57ms
