<template>
  <div class="test">hide on bush</div>
</template>
<style scoped lang="scss">
// 可以用于选择器 属性值属性名，注视
$font-size: 12px;
$font-height: 30px;
.test {
  font: #{$font-size}/#{$font-height} "微软雅黑";
}
$class: test;
$style: color;
.#{$class} {
  #{$style}: pink;
}
/*
@shuoming：#{$class}
*/
</style>
