<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { FreeMode, Mousewheel } from "swiper/modules";
const modules = [FreeMode, Mousewheel];
</script>

<template>
  <div class="home-page">
    <swiper
      :direction="'vertical'"
      :speed="300"
      :mousewheel="true"
      :modules="modules"
      class="home-swiper"
    >
      <swiper-slide>
        <div class="full-screen">第一屏</div>
      </swiper-slide>
      <swiper-slide>
        <div class="full-screen">第二屏</div>
      </swiper-slide>
      <swiper-slide>
        <div class="full-screen">第三屏</div>
      </swiper-slide>
      <swiper-slide>
        <swiper
          :freeMode="true"
          :direction="'vertical'"
          :speed="300"
          :mousewheel="true"
          :modules="modules"
          :releaseOnEdges="true"
          class="last-swiper"
        >
          <swiper-slide>
            <div class="full-screen">第四屏</div>
          </swiper-slide>
          <!-- <swiper-slide class="last-swiper">
            <div class="footer-container">页脚</div>
          </swiper-slide> -->
        </swiper>
      </swiper-slide>
    </swiper>
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
.home-swiper {
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
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #f83d4a;
}
.last-swiper {
  height: 100%;
  .swiper-slide {
    height: calc(100% + 1px) !important;
  }
  .swiper-slide:last-child {
    // height: auto !important;
  }
}
</style>
