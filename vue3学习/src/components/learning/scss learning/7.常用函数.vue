<template>
  <div class="test">hide on bush</div>
  <div class="test2">hide on bush</div>
  <div class="test3">hide on bush</div>
  <div class="test4">hide on bush</div>
  <div class="test5">hide on bush</div>
</template>
<style scoped lang="scss">
.test {
  background-color: lighten(#5c7a29, 10%); // 变亮
  background-color: darken(#5c7a29, 10%); //变暗
  color: opacify(rgba(#5c7a29, 0.6), 0.1); //增加透明度
}
// 字符函数
$word: 内容;
$color: "#f00";
.test2 {
  &:before {
    content: quote($word); //加引号
  }
  background-color: unquote($color); //去引号
}
// 数值
.test3 {
  z-index: abs(-15);
  z-index: ceil(5.1); //向上取整
  z-index: floor(5.1); //向下取整
  z-index: round(5.1); //四舍五入
  z-index: max(1, 2);
  z-index: random();
}

//list
.test3 {
  z-index: length(12px); //1
  z-index: length(12px 13px); //2
  z-index: index(a b c d, c); //3
  padding: append(10px 20px, 30px); // 10px 20px 30px
  color: nth(red blue green, 2); //blue
}

//map
$map-sizes: (
  "small": 12px,
  "normal": 16px,
  "large": 22px,
);
.test4 {
  font-size: map-get($map-sizes, "normal");
  @if map-has-key($map: $map-sizes, $key: "small") {
    color: pink;
  }
  &:after {
    content: map-keys($map: $map-sizes) + "" + map-values($map: $map-sizes) + "";
  }
}

$check-color: #f00;
@mixin check-padding($left: 0, $top: 0, $right: 0, $bottom: 0) {
  padding: $left $top $right $bottom;
}
.test5 {
  @if variable-exists(check-color) {
    color: $check-color;
  }
  @if mixin-exists(check-padding) {
    @include check-padding(10px, 20px, 30px, 40px);
  }
}
</style>
