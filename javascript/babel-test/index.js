// import * as ttt from "./test-i.js";

// const global = require("core-js/internals/global");

// console.log(ttt);
var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
elements.map((element) => {
  return element.length;
});

new Promise((res) => res(1)).then((res) => {
  console.log(res);
});
async function a() {
  await Promise.resolve(1);
}
a();

const aaa = {
  b: () => {
    console.log(this, 123);
    return this.a;
  },
};
console.log(aaa.b());

console.log(aaa?.c?.d);
var tettt = "tttsss";
console.log(tettt.replaceAll("t", "a"));
