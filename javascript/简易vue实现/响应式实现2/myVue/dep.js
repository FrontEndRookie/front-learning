export class Dep {
  static target = null;
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  removeSub(sub) {
    this.subs = this.subs.filter((item) => item !== sub);
  }
  notify() {
    console.log(this.subs);
    this.subs.forEach((sub) => sub.update());
  }
}
