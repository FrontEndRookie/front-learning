Array.prototype.myForEach = function (cb) {
  let _array = this;
  let _length = _array.length;
  let _this = arguments[1] || window;
  for (let i = 0; i < _length; i++) {
    cb.apply(_this, [_array[i], i, _array]);
  }
};

Array.prototype.myMap = function (cb) {
  let _array = this;
  let _length = _array.length;
  let _this = arguments[1] || window;
  let result;
  let target = [];
  for (let i = 0; i < _length; i++) {
    result = cb.apply(_this, [deepClone(_array[i]), i, _array]);
    result ? target.push(result) : "";
  }
  return target;
};

Array.prototype.myFilter = function (cb) {
  let _array = this;
  let _length = _array.length;
  let _this = arguments[1] || window;
  let result;
  let target = [];
  for (let i = 0; i < _length; i++) {
    result = cb.apply(_this, [deepClone(_array[i]), i, _array]);
    result ? target.push(deepClone(_array[i])) : "";
  }
  return target;
};

Array.prototype.myEvery = function (cb) {
  let _array = this;
  let _length = _array.length;
  let _this = arguments[1] || window;
  let result;
  let target = true;
  for (let i = 0; i < _length; i++) {
    result = cb.apply(_this, [deepClone(_array[i]), i, _array]);
    if (!result) {
      target = false;
      break;
    }
  }
  return target;
};

Array.prototype.mySome = function (cb) {
  let _array = this;
  let _length = _array.length;
  let _this = arguments[1] || window;
  let result;
  let target = false;
  for (let i = 0; i < _length; i++) {
    result = cb.apply(_this, [deepClone(_array[i]), i, _array]);
    if (result) {
      target = true;
      break;
    }
  }
  return target;
};

Array.prototype.myReduce = function (cb, prev) {
  let _array = this;
  let _length = _array.length;
  let _this = arguments[2] || window;
  if (prev === undefined) {
    var i = 1;
    prev = _array[0];
  } else {
    var i = 0;
  }
  for (; i < _length; i++) {
    prev = cb.apply(_this, [prev, deepClone(_array[i]), i, _array]);
  }
  return prev;
};

Array.prototype.myFlat = function (num) {
  let _array = deepClone(this);
  outside: for (let j = 0; num ? j < num : true; j++) {
    let allNotArray = true;
    let totals = _array.length;
    for (let i = 0; i < totals; i++) {
      const target = _array[i];
      if (Array.isArray(target)) {
        allNotArray = false;
        _array.splice(i, 1, ...target);
      }
    }
    if (allNotArray) {
      break outside;
    }
  }
  return _array;
};

const arr = [[[[1], 3], 2]];
Array.prototype.selfFlat = function () {
  if (!Array.isArray(this)) {
    return "";
  }
  let result = [];
  for (let i of this) {
    if (Array.isArray(i)) {
      result = result.concat(i.selfFlat());
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(arr.selfFlat());
