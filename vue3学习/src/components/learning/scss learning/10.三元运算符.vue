<template>
  <div class="test">hide on bush</div>
</template>
<style lang="scss" scoped>
$theme: light;
.test {
  color: if($theme == light, #000, #fff);
}
</style>
