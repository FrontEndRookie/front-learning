<template>
  <div class="button-primary">hide on bush</div>
  <div class="button-danger">hide on bush</div>
  <div class="button-primary-good">hide on bush</div>
</template>
<style scoped lang="scss">
.button {
  min-width: 40px;
  border: 1px solid silver;
  padding: 5px 10px;
}
.font-normal {
  font-size: 12px;
  font-weight: 400;
}
// 可以继承多个
.button-primary {
  @extend .button;
  @extend .font-normal;
  background-color: #31708f;
  color: white;
}
// 可以多重继承
.font-danger {
  @extend .button;
  font-size: 14px;
  font-weight: bold;
}

.button-danger {
  @extend .font-danger;
  background-color: red;
  color: white;
}

// %和.的区别在于
// 使用.的话会生成多余的代码 .button,.button-xxxx
// 使用%的话只会生成一个代码块 .button-xxx 不会编译父类
%button {
  min-width: 40px;
  border: 1px solid silver;
  padding: 5px 10px;
}

.button-primary-good {
  @extend %button;
  background-color: #31708f;
  color: white;
}

//混入和继承的区别
//混入： 每一个最终的类都是完整的代码
//继承: 会把父类单独提出来，字类进行扩展

// @mixin test{color:red}
// .useTest1{@include test;font-size:10px} .useTest2{@include test;font-size:12px}
// 最终代码 .useTest1{color:red;font-size:10px} .useTest2{color:red;font-size:12px}

// %test { color:red}
// .useTest1 {@ented %test;font-size:10px} .useTest2 {@ented %test;font-size:12px}
// 最终代码 .useTest1,.useTest2{color:red} .useTest1 {font-size:10px} .useTest2 {font-size:12px}
</style>
