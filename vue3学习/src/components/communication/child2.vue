<template>
  <div @click="sendData">grandSon</div>
</template>
<script setup lang="ts">
import type { InjectionKey } from "vue";

//inject
interface myInject {
  message: string;
}
const sonInject = inject("pro", {} as myInject);
console.log(sonInject);

//attrs
const attrs = useAttrs();
console.log(attrs);
const emit = defineEmits<{ (el: "test", value: string): void }>();
const sendData = () => {
  emit("test", "grandSon");
};
</script>
