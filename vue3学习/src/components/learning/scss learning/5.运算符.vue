<template>
  <div class="test">hide on bush</div>
  <div class="test2">hide on bush</div>
  <div class="test3">hide on bush</div>
  <div class="test4">hide on bush</div>
</template>
<style scoped lang="scss">
//1. 等号运算符 == ， ！==
$theme: "normal";
.test {
  @if $theme == "normal" {
    color: black;
    font-size: 12px;
  } @else {
    color: skyblue;
    font-size: 14px;
  }
}
//2，关系运算符 > < >= <=
$size: 2;
.test2 {
  @if $size > 1 {
    color: red;
  } @else {
    color: blue;
  }
}

//3. 逻辑运算符 and or not
$theme: "normal";
.test3 {
  @if $theme == "normal" and $size > 1 {
    color: red;
  } @else {
    color: blue;
  }
  @if not($size<5) or $theme == "normal" {
    font-weight: bolder;
  } @else {
    font-weight: 200;
  }
}

$chuWidth: 100px;
//数字运算符
.test4 {
  //前面单位可以不写， 前面写了，要保证前后单位一致 （px和pt可以）
  width: 10+20px;
  font-size: 10+10px;
  // 除的部分可以用变量/用函数/进行其他运算操作
  height: $chuWidth/10;
  border: round($chuWidth/50) solid skyblue;
  height: 100px/10px+100px;
}
</style>
