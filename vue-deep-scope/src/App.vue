<script setup>
</script>

<template>
   <div class="deep-scope-demo">
      <h1>deep-scope-demo</h1>
      <h2>deep-scope-demo</h2>
      <h3>deep-scope-demo</h3>
      <h4>deep-scope-demo</h4>
      <h5>deep-scope-demo</h5>
      <h6>deep-scope-demo</h6>
      <!-- <el-input v-model="input" style="width: 240px" placeholder="Please input" /> -->
   </div>
</template>

<style scoped lang="scss">
.deep-scope-demo {
  // input {
  //   background-color: skyblue;
  // }
  :deep(input) {
    background-color: skyblue;
  }
}
.deep-scope-demo h1 {
  color: red;
}
.deep-scope-demo h2 {
  color: green;
}
.deep-scope-demo h3 {
  color: blue;
}
.deep-scope-demo h4 {
  color: rgb(0, 255, 204);
}
.deep-scope-demo h5 {
  color: pink;
}
.deep-scope-demo h6 {
  color: purple;
}

</style>
