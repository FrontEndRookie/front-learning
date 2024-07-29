<template>
  <div class="test">hide on bush</div>
  <div class="test2">
    <div class="test2-top">hide on bush</div>
  </div>
</template>
<style scoped lang="scss">
.test {
  font: {
    size: 20px;
    family: "Arial";
    weight: bold;
  }
}
.test2 {
  &-top {
    color: red;
    &:hover {
      color: pink;
    }
  }
}
</style>
