// bootstrap the demo
var demo = new Vue({
  el: "#demo",
  created() {
    console.log(this.a);
  },
  methods: {
    add() {
      // this.$delete(this.a, "test");
      // delete this.a.test;
      console.log(this.a);
    },
  },
  data: {
    aa: 1,
    a: { test: 1 },
    b: 2,
  },
  computed: {
    test() {
      return this.aa + 1;
    },
  },
  watch: {
    // aa(nv, ov) {
    //   console.log(nv, ov);
    // },
  },
});
