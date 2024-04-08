<template>
  <transition name="w-message-fade">
    <div :class="['w-message', `w-message-${type}`]" :style="positionStyle" v-show="visible">
      <i :class="['w-icon-message', 'w-message-before-icon', `w-message-before-icon-${type}`]"></i>
      <div :class="['w-message__content']">{{ message }}</div>
      <!-- <i class="w-icon-close2 w-message-close" @click="close"></i> -->
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      closed: false,
      visible: false,
      message: 'message',
      type: 'warning',
      duration: 3000,
      top: 20,
    }
  },
  computed: {
    positionStyle() {
      return {
        'top': `${this.top}px`
      };
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      this.onClone(this.id)
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
}
</script>

<style lang='scss' scoped>
@use "sass:math";

$--color-primary: #409EFF !default;
$--color-white: #FFFFFF !default;
$--color-black: #000000 !default;
$--color-success: #67C23A !default;
$--color-warning: #E6A23C !default;
$--color-danger: #F56C6C !default;
$--color-info: #909399 !default;


$--color-success-light: mix($--color-white, $--color-success, 80%) !default;
$--color-warning-light: mix($--color-white, $--color-warning, 80%) !default;
$--color-danger-light: mix($--color-white, $--color-danger, 80%) !default;
$--color-info-light: mix($--color-white, $--color-info, 80%) !default;

$--color-success-lighter: mix($--color-white, $--color-success, 90%) !default;
$--color-warning-lighter: mix($--color-white, $--color-warning, 90%) !default;
$--color-danger-lighter: mix($--color-white, $--color-danger, 90%) !default;
$--color-info-lighter: mix($--color-white, $--color-info, 90%) !default;

$--message-success-font-color: $--color-success !default;
$--message-info-font-color: $--color-info !default;
$--message-warning-font-color: $--color-warning !default;
$--message-danger-font-color: $--color-danger !default;

.w-message {
  min-width: 380px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity .3s, transform .4s, top .4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  z-index: 999;

  &-info {
    background-color: $--color-info-lighter;
    border-color: $--color-info-light;

    .w-message__content {
      color: $--message-info-font-color;
    }
  }

  &-success {
    background-color: $--color-success-lighter;
    border-color: $--color-success-light;

    .w-message__content {
      color: $--message-success-font-color;
    }
  }

  &-warning {
    background-color: $--color-warning-lighter;
    border-color: $--color-warning-light;

    .w-message__content {
      color: $--message-warning-font-color;
    }
  }

  &-danger {
    background-color: $--color-danger-lighter ;
    border-color: $--color-danger-light;

    .w-message__content {
      color: $--message-danger-font-color;
    }
  }

  &-close {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #c0c4cc;
    font-size: 16px;
    cursor: pointer;
  }

  &-before-icon {
    margin-right: 10px;

    &-info {
      color: $--color-info;
    }

    &-success {
      color: $--color-success;
    }

    &-warning {
      color: $--color-warning;
    }

    &-danger {
      color: $--color-danger;
    }
  }
}

.w-message-fade-enter,
.w-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
