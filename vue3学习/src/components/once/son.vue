<template>
  <div>
    {{ props.test }}
    <el-input v-model="testComputed"></el-input>
    <div id="drag" draggable="true" ref="drag">position is {{}}</div>
    <div
      ref="target"
      style="
        margin-top: 100px;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
      "
    >
      123
    </div>
  </div>
</template>

<script setup lang="ts">
import { A, B } from "@/type/index";
import type { PropType } from "vue";
type proType = {
  test: string;
};
const props = withDefaults(defineProps<proType>(), {
  test: "123",
});
enum emitName {
  test = "update:test",
}
const emit = defineEmits<{ (e: emitName.test, v: string): void }>();
const testComputed = computed({
  get() {
    return props.test;
  },
  set(val: string) {
    emit(emitName.test, val);
  },
});

let drag = ref<HTMLElement | null>(null);
let target = ref<HTMLElement | null>(null);
let from = ref<HTMLElement | null>(null);
onMounted(() => {
  drag.value?.addEventListener("click", () => {
    console.log(123);
  });
  drag.value?.addEventListener("dragover", (event: DragEvent) => {
    event.preventDefault();
  });

  drag.value?.addEventListener("dragstart", function (event) {
    console.log("start");
    event.dataTransfer?.setData("text/plain", "这是拖动的数据");
  });
  target.value?.addEventListener("dragover", (event: DragEvent) => {
    event.preventDefault();
  });
  target.value?.addEventListener("drop", (event: DragEvent) => {
    console.log(event);
    (event.target as HTMLElement)?.appendChild(
      from.value?.cloneNode(true) as Node
    );
  });

  target.value?.addEventListener("dragenter", function (event: DragEvent) {
    console.log("dragenter", event);
    const target = event.target as HTMLElement;
    from.value = event.relatedTarget as HTMLElement;
    console.log();
    //
  });
  target.value?.addEventListener("dragleave", function (event: DragEvent) {
    console.log("dragleave", event);
    (event.target as HTMLElement).innerHTML = "";

    //
  });
});
</script>
<style scoped lang="scss">
#drag {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
