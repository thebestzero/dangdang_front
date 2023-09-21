<template>
  <div class="content">
    <div class="tosearch">
      <i class="iconfont icon-fangdajing"></i>
      <div class="tosearch-keyword">
        <input
          type="text"
          placeholder="神奇校车"
          class="tosearch-keyword-input"
        />
        <i class="iconfont icon-iconfontscan"></i>
      </div>
    </div>
    <div class="message">
      <i class="iconfont icon-xiaoxi"></i>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.content {
  @extend .common-content;
  .tosearch {
    @extend .common-to-search;
    // display: flex;
    // align-items: center;
    // width: 4.32rem;
    // height: 0.67rem;
    // background-color: #f6f6f6;
    // border-radius: 1rem;
    .icon-fangdajing {
      font-size: 0.32rem;
      margin: 0rem 0.2rem;
    }
    &-keyword {
      width: 3.5rem;
      height: 0.63rem;
      display: flex;
      align-items: center;
      gap: 0.2rem;

      &-input {
        height: 0.4rem;
        width: 2.7rem;
        background: none;
        border: none;
        font-size: 0.25rem;
      }
      .icon-iconfontscan {
        font-size: 0.32rem;
      }
    }
  }
  .message {
    width: 0.76rem;
    .icon-xiaoxi {
      font-size: 0.37rem;
    }
  }
}
</style>
