import { Dep } from "./dep.js";
export function Observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  const dep = new Dep();
  Object.keys(data).forEach((key) => {
    let value = data[key];
    Object.defineProperty(data, key, {
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return value;
      },
      set(newValue) {
        console.log("set", newValue);
        if (newValue !== value) {
          value = newValue;
          dep.notify();
        }
        //   return newValue;
      },
    });
  });
  console.log(data, 123);
}
