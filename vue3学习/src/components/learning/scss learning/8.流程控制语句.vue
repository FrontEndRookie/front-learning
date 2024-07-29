<template>
  <div class="test">hide on bush</div>
  <div class="forAnimation">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>
<style scoped lang="scss">
$theme: "abc";
@mixin test($size: small) {
  @if $size== "small" {
    font-size: 12px;
  } @else if $size== "big" {
    font-size: 14px;
  } @else {
    font-size: 16px;
  }
}
.test {
  @if $theme== "abc" {
    color: red;
  } @else if $theme== "def" {
    color: blue;
  } @else {
    color: green;
  }
  @include test(big);
}

// for
@keyframes loading {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px);
    background-color: pink;
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}
.forAnimation {
  display: flex;
  align-items: center;
  gap: 5px;
  .item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: loading 0.5s infinite;
  }
  // to 6 不包含6
  // through 6 包含6
  @for $i from 1 to 6 {
    .item:nth-child(#{$i}) {
      animation-delay: unquote($string: "0." + $i + "s");
    }
  }
}
</style>
