class A {
  a = 1;
  constructor(b) {
    this.b = b;
  }
}
const obj = { a: 1 };
function Print() {
  console.log(this.a);
}
obj::Print();
