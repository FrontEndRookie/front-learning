function LIS(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return [];
  }
  let result = [[arr[0]]];
  function update(n) {
    for (let i = result.length - 1; i >= 0; i--) {
      const lastArr = result[i];
      const tail = lastArr[lastArr.length - 1];
      if (tail < n) {
        result[i + 1] = [...lastArr, n];
        break;
      } else if (n < tail && i == 0) {
        result[i] = [n];
      }
    }
  }
  for (let i = 1; i < arr.length; i++) {
    update(arr[i]);
    console.log(result);
  }
  return result[result.length - 1];
}

console.log(LIS([1, 3, 4, 2, 3, 5, 6, 7]));
// [1, 3, 4, 2, 3, 5, 6, 7]
// 1- [1]
// 2- [1,3]   4- [1,2]
// 3- [1,3,4]  5- [1,2,3]
// 6-8 [1,2,3,5,6,7]