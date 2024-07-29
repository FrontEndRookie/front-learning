type callBack<K, V> = (k: K, v: V) => void;
class Dictionary<K, V> {
  private keys: K[] = [];
  private vals: V[] = [];
  getSize(): number {
    return this.keys.length;
  }
  forEach(CallBack: callBack<K, V>) {
    this.keys.forEach((k, i) => {
      CallBack(k, this.vals[i]);
    });
  }
  set(key: K, val: V) {
    const idx = this.keys.indexOf(key);
    if (idx >= 0) {
      this.vals[idx] = val;
    } else {
      this.keys.push(key);
      this.vals.push(val);
    }
  }
  has(key: K) {
    return this.keys.some((i) => i == key);
  }
  delete(key: K) {
    const idx = this.keys.indexOf(key);
    if (idx >= 0) {
      this.keys.splice(idx, 1);
      this.vals.splice(idx, 1);
    }
  }
}
