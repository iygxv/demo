<script setup lang="ts">

const a = ref(1)
const router = useRouter()
// const route = useRoute()
const handleJump = (id: number) => {
  if (id === 1) {
    router.push('/demo1')
  } else {
    router.push('/demo2')
  }
}
</script>

<template>
  <div>
    {{ a  }}
    <button @click="handleJump(1)">跳转 demo1</button>
    <button @click="handleJump(2)">跳转 demo2</button>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
