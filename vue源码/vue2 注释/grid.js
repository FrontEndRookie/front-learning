// bootstrap the demo
var demo = new Vue({
  el: "#demo",
  created() {
    console.log(123);
  },
  methods: {
    add() {
      this.aa++;
    },
  },
  data: {
    aa: 1,
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
