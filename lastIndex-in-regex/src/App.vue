<script setup>
import  { ref } from 'vue'
const value = ref('')
const errorTips = ref(false)
const reg = /^1\d{10}$/g
const handleInput = (e) => {
  reg.lastIndex = 0
  if(reg.test(e.target.value)) {
    errorTips.value = false
  }else {
    errorTips.value = true
  }
  console.log('lastIndex', reg.lastIndex)
}
</script>

<template>
  <div>
    手机号：<input v-model="value" placeholder="请输入手机号码" @input="handleInput">
    <div style="color:red;font-size:12px;margin-top:4px" v-show="errorTips">
      请输入正确的手机号码
    </div>
  </div>
</template>

<style scoped>
input {
  width: 200px;
  height: 20px;
}
</style>
