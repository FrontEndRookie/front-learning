<template>
  <div class="test">hide on bush</div>
  <div class="test2">hide on bush</div>
  <div class="test3">hide on bush</div>
</template>
<style lang="scss" scoped>
@mixin testPadding($top: 0, $right: 0, $bottom: 0, $left: 0) {
  padding: $top $right $bottom $left;
}
.test {
  @include testPadding(10px, 20px, 30px, 40px);
  background: red;
}
.test2 {
  background-color: pink;
}
@mixin linearGradient($direction, $colorList...) {
  background-color: nth($colorList, 1);
  background-image: linear-gradient($direction, $colorList);
}
.test3 {
  @include linearGradient(to right, red, blue);
}
</style>
