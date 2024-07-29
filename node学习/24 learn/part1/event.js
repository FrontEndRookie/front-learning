const eventEmitter = require("events");

//用法和 vue的eventbus 类似
const bus = new eventEmitter();

//事件默认只能监听十个
// bus.setMaxListeners(100);设置监听上限
// bus.getMaxListeners() 获取监听上限
bus.on("someEvent", function (arg1, arg2) {
  console.log("listener1", arg1, arg2);
});

bus.emit("someEvent", "arg1 参数", "arg2 参数");

bus.once("onceEvent", (argu) => {
  console.log("只触发一次");
});

bus.emit("onceEvent", "argu");

// 移除监听
function removeFunc(arg1, arg2) {
  console.log("removeFunc", arg1, arg2);
}
bus.on("testRemove", removeFunc);
bus.off("testRemove", removeFunc);
