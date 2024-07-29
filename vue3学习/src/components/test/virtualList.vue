<template>
  <div class="virtual-list" ref="virtualListRef">
    <div
      :style="{
        padding: `${virtualPaddingTop}px 0 ${virtualPaddingBottom}px 0`,
      }"
    >
      <div class="item" v-for="item in showList" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from "../../utils/useAsyncData";
import { useScroll } from "@vueuse/core";

interface RequestData {
  value: any;
}
// let request = ref<RequestData>();
// let res = await useAsyncData<RequestData>(
//   "airCompanyList",
//   `http://127.0.0.1:3008/
// `,
//   {
//     awaitSetup: true,
//   }
// );
// request.value = res.value;
const arr = new Array(100000);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}
const list = reactive(arr);
const showList = ref<any[]>([]);
const showIndex = ref(1);

const virtualPaddingTop = ref(0);
const virtualPaddingBottom = ref(0);
watchEffect(() => {
  // 1的时候删除全部 2的时候删除前22个 3的时候删除前50个
  // 然后添加50个
  if (showIndex.value == 1) {
    showList.value.splice(0);
  } else {
    showList.value.splice(0, showIndex.value == 2 ? 22 : 50);
  }
  showList.value.push(
    ...list.slice((showIndex.value - 1) * 50, showIndex.value * 50)
  );
  const changeBoundary = (showIndex.value - 1) * 50 + 25;
  virtualPaddingTop.value =
    50 * (changeBoundary - 50 > 0 ? changeBoundary - 3 - 50 : 0);
  virtualPaddingBottom.value = 50 * (list.length - changeBoundary - 25);
});
const virtualListRef = ref<HTMLElement>();

const { x, y, isScrolling, arrivedState, directions } =
  useScroll(virtualListRef);

watch(y, (nv) => {
  //<1250 -1
  //1250-3750 -2
  //3750-6250 -3
  // ...
  showIndex.value = Math.floor((nv / 1250 + 1) / 2 + 1);
  console.log(nv, showIndex.value);
});
</script>
<style scoped lang="scss">
.virtual-list {
  width: 1000px;
  height: 1000px;
  max-height: 1000px;
  box-sizing: border-box;
  overflow: scroll;
  border: 1px solid pink;
  .item {
    height: 50px;
  }
}
</style>
