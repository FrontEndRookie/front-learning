<template>
  <div>
    <input type="text" v-model="textValue1" />
    <input type="text" v-model="textValue2" />
    <button @click="refWatch.a.b = 3">refWacth{{ refWatch.a.b }}</button>
    <button @click="reactiveWatch.a.b = 3">
      reactiveWatch{{ reactiveWatch.a.b }}
    </button>

    <el-input type="text" v-model="watchEffects" />
    <el-input type="text" v-model="watchEffectss" />
    <button ref="stopButton" @click="stopWatch">停止监听</button>
    <button @click="changeWatchEffectObj">changeWatchEffectObj</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from "vue";
const textValue1 = ref("");
const textValue2 = ref("");
watch([textValue1, textValue2], (nv, ov) => {
  console.log(nv, ov);
});
const refWatch = ref({
  a: {
    b: 2,
  },
});
//watch深层次监听有bug oldvalue和newvalue相同
//ref深层次数据改变需要deep
watch(
  refWatch,
  (nv, ov) => {
    console.log(nv, ov);
  },
  { deep: true }
);
const reactiveWatch = reactive({
  a: {
    b: 2,
    c: 3,
  },
});
//reactive不需要deep
watch(reactiveWatch, (nv, ov) => {
  console.log(nv, ov);
});

//单独监听一个属性
watch(
  () => reactiveWatch.a.c,
  (nv, ov) => {
    console.log(nv, ov);
  },
  {
    // immediate: true,
  }
);
interface ObjRef {
  a: {
    b: number;
  };
}
const watchEffectObj = ref<ObjRef>({ a: { b: 3 } });
const changeWatchEffectObj = () => {
  watchEffectObj.value.a.b++;
};
const refWatchObj = ref<Object>({ a: { b: 3 } });
const watchEffects = ref<string>("1");
const watchEffectss = ref<string>("2");
const stop = watchEffect(
  (beforeCall) => {
    beforeCall(() => {
      console.log("watch前处理");
    });
    if (watchEffects.value) {
      console.log("watchEffects改变了");
    }
    if (watchEffectss.value) {
      console.log("watchEffectss改变了");
    }
    if (watchEffectObj.value.a.b) {
      console.log("watchEffectObj改变了");
    }
  },
  {
    flush: "post", //调整watchEffect的执行时机为元素挂载/更新之后执行
    //默认值pre 回调函数会在元素挂载 或者 更新 之前执行；
    //选项还接受 sync，这将强制效果始终同步触发。这是低效的
    onTrigger(e) {
      console.log("trigger", e);
      // debugger
    }, //变化时调试函数
  }
);
const stopWatch = () => stop();
</script>
<style scoped></style>
