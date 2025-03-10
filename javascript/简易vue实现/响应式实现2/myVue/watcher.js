import { Dep } from "./dep.js";
export class Watcher {
  constructor(el, data, key) {
    this.el = el;
    this.data = data;
    console.log(data, "data");
    this.key = key;
    if (!el) return;
    this.value = this.get();
    this.update();
  }
  get() {
    Dep.target = this;
    const value = this.data[this.key];
    Dep.target = null;
    return value;
  }
  update() {
    const targetValue = this.data[this.key];
    if (this.el.nodeType === 3) {
      this.el.textContent = targetValue;
    } else {
      this.el.innerText = targetValue;
    }
  }
}
