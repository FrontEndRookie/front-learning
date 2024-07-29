function deepClone(origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin != "object") {
    return origin;
  }
  if (origin instanceof Date) {
    return new Date(origin);
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }
  //解决循环引用  如obj.a = obj obj为要深拷贝的对象
  const hashKey = hashMap.get(origin);
  if (hashKey) {
    return hashKey;
  }
  const target = new origin.constructor();
  hashMap.set(origin, target);
  // console.log(target,hashMap)
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], hashMap);
    }
  }
  return target;
}
