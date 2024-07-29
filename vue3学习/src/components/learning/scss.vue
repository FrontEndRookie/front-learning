<template>
  <div>
    <div class="font-12px font-primaryA">sakura</div>
    <div class="font-14px mapGetFont">sakura</div>
    <div class="font-16px boldA">sakura</div>

    <div class="test">
      sakura
      <div class="child">
        <div class="test">sakura</div>
      </div>
    </div>

    <div class="A fontFunction">
      <div class="B">sakura</div>
    </div>
    <div class="B">sakura</div>
    <div class="C">sakura</div>

    <div class="mixinColor">sakura</div>
    <div class="ccColor">sakura</div>
  </div>

  <div class="grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
$size: 12px, 14px, 16px;
@each $s in $size {
  .font-#{$s} {
    font-size: $s;
  }
}

$font-types: (
  primary: 400,
  bold: 600,
  bolder: 800,
);
$font-typesA: (
  primaryA: 500,
  boldA: 700,
  bolderA: 900,
);
$font-merge: map-merge($font-types, $font-typesA);
// @each $key,$val in $font-types {
//     .font-#{$key}{
//         font-weight: $val;
//     }
// }
@each $key, $val in $font-merge {
  .font-#{$key} {
    font-weight: $val;
  }
}
@if map-has-key($font-merge, boldA) {
  .boldA {
    font-weight: map-get($font-merge, boldA);
  }
}
else {
  @warn "No color found for faceboo in $social-colors map. Property ommitted.";
}

@function setFont($type) {
  @if map-has-key($font-merge, $type) {
    @return map-get($font-merge, $type);
  }
}
.fontFunction {
  font-weight: setFont(bolderA);
}
.mapGetFont {
  font-weight: map-get($font-types, primary);
}
.test {
  color: red;
  .child & {
    color: pink;
  }
}
.A {
  .B {
    color: purple;
  }
  @at-root .B {
    color: pink;
  }
}

$color: white;
@mixin colors($color: pink) {
  background: $color;
  @content;
}
.mixinColor {
  @include colors(red) {
    color: $color;
  }
}

@mixin ccolors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}

$values: #ff0000, gray, skyBlue;
.ccColor {
  border: 1px solid;
  @include ccolors($values...);
}
</style>

<style scoped lang="scss">
.grid {
  width: 500px;
  height: 500px;
  margin-top: 30px;
  display: grid;
  --c1: 1fr;
  --c2: 1fr;
  --c3: 1fr;
  --r1: 1fr;
  --r2: 1fr;
  --r3: 1fr;
  grid-template-columns: var(--c1) var(--c2) var(--c3);
  grid-template-rows: var(--r1) var(--r2) var(--r3);
}
@for $i from 0 to 9 {
  div:nth-child(#{$i + 1}) {
    background: hsl($i * 40deg, 100%, 64%);
  }
  .grid {
    &:has(div:nth-child(#{$i + 1}):hover) {
      $r: calc($i / 3) + 1;
      $c: $i%3 + 1;
      --r#{$r}: 2fr;
      --c#{$c}: 2fr;
    }
  }
}
</style>
