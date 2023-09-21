<template>
  <div
    v-for="(item, index) in isReadyOpen
      ? getCurrentSubThirdCtgysList
      : getCurrentThirdCtgysList"
  >
    <div>{{ item.thirdname }}</div>
  </div>
  <div class="icon">
    <span v-show="isReadyOpen">
      <i class="iconfont icon-xiangxiajiantou"></i>
    </span>
    <span v-show="!isReadyOpen">
      <i class="iconfont icon-xiangshangjiantou"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import FstToThrdCtgy from '@/views/ctgy/service'

const {
  getIsReadyOpen,
  isReadyOpen,
  getCurrentSubThirdCtgysList,
  getCurrentThirdCtgysList,
} = FstToThrdCtgy.ctgyStoreToRef
</script>

<style scoped></style>
