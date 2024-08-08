<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import Swiper from "swiper";
import "swiper/css";
import { Mousewheel } from "swiper/modules";

let swiperRef = ref(null); // swiper实例
let swiperOptions = ref({}); // swiper配置项

onBeforeMount(() => {
  swiperOptions.value = {
    initialSlide: 0, // 默认显示第0页
    direction: "vertical", // 滑动方向
    speed: 400, // 滑动速度
    slidesPerView: "auto", // 滑动到贴合边缘
    mousewheel: true, // 使用鼠标滚轮
    observer: true, // 监听
    observeParents: true, // 监听
    allowTouchMove: false, //不允许触屏拖动
  };
});

onMounted(() => {
  Swiper.use([Mousewheel]);
  const swiper = new Swiper(".swiper-container", swiperOptions.value);
  swiperRef.value = swiper;
});

</script>

<template>
  <div class="home-page">
    <div class="swiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide over">
          <div class="full-screen">第一屏</div>
        </div>
        <div class="swiper-slide over">
          <div class="full-screen">第二屏</div>
        </div>
        <div class="swiper-slide over">
          <div class="full-screen">第三屏</div>
        </div>
        <div class="swiper-slide over">
          <div class="full-screen">第四屏</div>
        </div>
        <div class="swiper-slide over footer">
          <div class="footer-container">页脚</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.home-page {
  width: 100%;
  height: 100vh;
}
.swiper {
  width: 100%;
  height: 100%;
}
.full-screen {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #57a7fd;
}
.footer-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #f83d4a;
}
.footer {
  width: 100%;
  height: 300px !important;
}
</style>
