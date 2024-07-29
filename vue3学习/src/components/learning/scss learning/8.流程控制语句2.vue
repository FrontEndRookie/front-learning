<template>
  <div class="test1">hide on bush</div>
  <div class="test2">hide on bush</div>
  <div class="test3">hide on bush</div>
</template>
<style scoped lang="scss">
//each
$colorList: red green blue;
@each $i in $colorList {
  $index: index($colorList, $i); // index从1开始
  .test#{$index} {
    color: $i;
  }
}

//while
$num: 6;
@while $num > 0 {
  .test#{$num} {
    width: $num * 10px;
  }
  $num: $num - 1;
}
</style>
