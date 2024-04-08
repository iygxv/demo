<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const showMessage1 = () => {
  proxy.$message({
    type: 'success',
    message: 'success message'
  })
}
const showMessage2 = () => {
  proxy.$message({
    type: 'warning',
    message: 'warning message'
  })
}
const showMessage3 = () => {
  proxy.$message({
    type: 'danger',
    message: 'danger message'
  })
}
const showMessage4 = () => {
  proxy.$message({
    type: 'info',
    message: 'info message'
  })
}
</script>

<template>
  <button @click="showMessage1">success message</button>
  <button @click="showMessage2">warning message</button>
  <button @click="showMessage3">error message</button>
  <button @click="showMessage4">info message</button>
</template>

<style lang="scss" scoped></style>