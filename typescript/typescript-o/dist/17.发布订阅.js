var Dispatch = /** @class */ (function () {
    function Dispatch() {
        this.list = {};
    }
    Dispatch.prototype.on = function (name, callback) {
        var callbackList = this.list[name] || [];
        callbackList.push(callback);
        this.list[name] = callbackList;
    };
    Dispatch.prototype.emit = function (name) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var evnetName = this.list[name];
        if (evnetName) {
            evnetName.forEach(function (fn) {
                fn.apply(_this, args);
            });
        }
        else {
            console.error('该事件未监听');
        }
    };
    Dispatch.prototype.off = function (name, fn) {
        var evnetName = this.list[name];
        if (evnetName && fn) {
            var index = evnetName.findIndex(function (fns) { return fns === fn; });
            evnetName.splice(index, 1);
        }
        else {
            console.error('该事件未监听');
        }
    };
    Dispatch.prototype.once = function (name, fn) {
        var _this = this;
        var decor = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            fn.apply(_this, args);
            _this.off(name, decor);
        };
        this.on(name, decor);
    };
    return Dispatch;
}());
var o = new Dispatch();
o.on('abc', function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg, 1);
});
o.once('abc', function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg, 'once');
});
// let fn = (...arg: Array<any>) => {
//     console.log(arg, 2);
// }
// o.on('abc', fn)
// o.on('ddd', (aaaa: string) => {
//     console.log(aaaa);
// })
//o.off('abc', fn)
o.emit('abc', 1, true, '小满');
o.emit('abc', 2, true, '小满');
// o.emit('ddd', 'addddddddd')
