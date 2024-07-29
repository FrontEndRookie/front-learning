<template>
  <div class="test">hide on bush</div>
  <div class="test2">hide on bush</div>
</template>
<script lang="test"></script>
<style scoped lang="scss">
@import "@/style/index.scss";
$color_1: red;
$color-1: pink;
// -和_视为一样的字符
$color-1: skyblue !default; //default判断之前有没有定义，没有则使用
.test {
  color: $color_1; //pink
}
.test2 {
  color: $font-base-color;
}
</style>
