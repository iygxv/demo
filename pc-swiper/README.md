# pc - swiper

## 注意点

如果要有非全屏页脚，那么需要使用 div 来包裹， 不要用 swiper-slide 包裹， 否则有问题

```html
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
```

出现的问题： 导致页脚页 一直占据一整页

## 参考
https://github.com/chenzhengqingzzz/GenShin3.0-Vue3-Vite-Swiper-8
