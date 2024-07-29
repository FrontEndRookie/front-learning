<template>
  <div class="test">hide on bush</div>
  <div class="test2">hide on bush</div>
</template>
<style lang="scss" scoped>
@function background-linear($direction, $color1, $color2: pink) {
  @return linear-gradient($direction, $color1, $color2);
}
@function background-linear2($direction, $colorList...) {
  @return linear-gradient($direction, $colorList);
}
.test {
  //正常传参
  background: background-linear(to right, red);
  // 按照key传参
  background: background-linear($direction: to right, $color1: red);
}
.test2 {
  background: background-linear2(to right, red, blue);
}
</style>
