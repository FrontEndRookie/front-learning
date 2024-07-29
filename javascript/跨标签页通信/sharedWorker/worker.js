let data = "";

self.onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = function (e) {
    if (e.data === "php是世界上最好的语言") {
      port.postMessage(data);
      data = "";
    } else {
      data = e.data;
    }
  };
};
