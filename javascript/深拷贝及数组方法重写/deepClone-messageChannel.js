function deepClone(data) {
  return new Promise((res) => {
    let { port1, port2 } = new MessageChannel();
    port2.onmessage = function (e) {
      res(e.data);
    };
    port1.postMessage(data);
  });
}
let data = { a: "" };
let b = { data: data };
data.a = b;
deepClone(data).then((res) => {
  console.log(res);
});
