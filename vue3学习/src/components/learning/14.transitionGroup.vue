<template>
  <transition-group
    tag="section"
    enter-active-class="animate__animated animate__fadeInBottomRight"
  >
    <!--tag为包裹标签 其余都和transition一样 -->
    <div v-for="item in arr" :key="item">
      {{ item }}
    </div>
  </transition-group>
  <button @click="arr.push(100)">add</button>

  <button @click="random">random</button>
  <transition-group move-class="move" tag="div" class="wraps">
    <div class="items" v-for="(item, index) in arrs" :key="item.id">
      {{ item.number }}
    </div>
  </transition-group>
  <input v-model="num.current" type="number" step="20" />
  <div>
    {{ num.tweenedNumber }}
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";
import "animate.css";
import gsap from "gsap";
let arr = reactive<number[]>([1, 2, 3]);
let arrs = ref(
  Array.apply(null, { length: 81 } as number[]).map((_, index) => ({
    id: index,
    number: (index % 9) + 1,
  }))
);
const random = () => {
  console.log(_.shuffle(arrs.value));
  arrs.value = _.shuffle(arrs.value);
};
const num = reactive({ current: 0, tweenedNumber: 0 });
watch(
  () => num.current,
  (nv, ov) => {
    gsap.to(num, {
      duration: 1,
      tweenedNumber: nv,
    });
  }
);
</script>
<style scoped lang="less">
.move {
  transition: all 1s;
}
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 9 + 18px);
  .items {
    width: 25px;
    height: 25px;
    border: 1px solid pink;
  }
}
</style>
