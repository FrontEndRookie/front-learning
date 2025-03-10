import { Observe } from "./utils.js";
import { Watcher } from "./watcher.js";
import { compile } from "./compile.js";

export class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
    this.$el = document.querySelector(options.el);
    this.$vm = this;
    this.init();
  }
  init() {
    Observe(this.$data);
    // new Watcher(this.$vm, "", this.$data, "msg");
    compile(this.$el, this.$vm);
  }
}
