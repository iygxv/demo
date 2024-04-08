<template>
  <div>
    <button @click="showMessage1">success message</button>
    <button @click="showMessage2">warning message</button>
    <button @click="showMessage3">error message</button>
    <button @click="showMessage4">info message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    showMessage1() {
      this.$message({
        type: 'success',
        message: 'success message'
      })
    },
    showMessage2() {
      this.$message({
        type: 'warning',
        message: 'warning message'
      })
    },
    showMessage3() {
      this.$message({
        type: 'danger',
        message: 'danger message'
      })
    },
    showMessage4() {
      this.$message({
        type: 'info',
        message: 'info message'
      })
    }
  }
}
</script>

<style lang='scss' scoped></style>
