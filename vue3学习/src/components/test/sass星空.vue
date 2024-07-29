<template>
  <div class="boxcontainer">
    <div class="layer1"></div>
    <div class="layer2"></div>
    <div class="layer3"></div>
    <div class="layer4"></div>
    <div class="layer5"></div>
  </div>
</template>
<style lang="scss">
.boxcontainer {
  width: 100vw;
  height: 100vh;
  background: #000;
}
@function getShadows($num) {
  $shadows: "#{random(100)}vw #{random(100)}vh #fff";
  @for $i from 2 through $num {
    $shadows: "#{$shadows},#{random(100)}vw #{random(100)}vh #fff";
  }
  @return unquote($shadows);
}
$duration: 1000s;
$count: 1000;
@for $i from 1 through 5 {
  $duration: calc($duration / 2);
  $count: floor(calc($count / 2));
  .layer#{$i} {
    $size: #{$i}px;
    position: fixed;
    width: $size;
    height: $size;
    border-radius: 50%;
    left: 0;
    top: 0;
    box-shadow: getShadows($count);
    animation: moveUp $duration linear infinite;
    &::after {
      content: "";
      position: fixed;
      left: 0;
      top: 100vh;
      border-radius: inherit;
      width: inherit;
      height: inherit;
      box-shadow: inherit;
    }
  }
}

@keyframes moveUp {
  to {
    transform: translateY(-100vh);
  }
}
</style>
