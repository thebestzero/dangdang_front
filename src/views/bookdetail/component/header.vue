<template>
  <div class="header" :style="headerOpactiy">
    <span class="left-arrow"><i class="iconfont icon-zuojiantou1"></i></span>
    <div class="header-wrapper">
      <span
          v-for="(item, index) in navList" :key="index"
          :class="{'item-active':index === activeIndex}"
          @click="switchTabs(index)"
      >
        <router-link :to="{name:item.name}">{{item.text}}</router-link>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import BookDetailService from '@/views/bookdetail/service';
const activeIndex = ref(0)
const {headerOpactiy} = BookDetailService
const navList = [
  { name: 'goods', text: '商品' },
  { name: 'goods', text: '详情' },
  { name: 'evaluate', text: '评论' },
  { name: 'evaluate', text: '相关' },
]

const switchTabs = (index:number) => {
  activeIndex.value = index
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0rem;
  top: 0rem;
  height: 0.5rem;
  z-index: 10;
  background-color: white;
  .left-arrow {
    position: absolute;
    top: 0.05rem;
    left: 0.2rem;
    .icon-zuojiantou1 {
      font-size: 0.4rem;
    }
  }
  &-wrapper {
    width: 5.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.5rem;
    gap: 0.35rem;
    font-size: 0.25rem;
    color: black;
    a {
      color: inherit;
    }
    .item-active{
      color: red;
      border-bottom: 0.04rem solid #f5344f;
    }
  }
}
</style>
