<template>
  <div class='content'>
    <div class='thrdctgys'><span class='thrdctgys-item'>全部</span></div>
    <div
      class='thrdctgys'
      :class="{'thrdctgys-active':item.thirdctgyId === getCurrentThrdCtgy.thirdctgyId}"
      v-for="(item, index) in isReadyOpen
      ? getCurrentSubThirdCtgysList
      : getCurrentThirdCtgysList"
      @click="changeBread(item)"
    >
      <span class='thrdctgys-item'>{{ item.thirdname }}</span>
    </div>
    <div class="icon">
    <span v-show="isReadyOpen" @click='tougleisReadyOpen(false)'>
      <i class="iconfont icon-xiangxiajiantou"></i>
    </span>
      <span v-show="!isReadyOpen" @click='tougleisReadyOpen(true)'>
      <i class="iconfont icon-xiangshangjiantou"></i>
    </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import FstToThrdCtgy from '@/views/ctgy/service'
import { onUnmounted } from 'vue'
import {ThirdCtgy} from '@/store/ctgy/state';
const {
  isReadyOpen,
  getCurrentSubThirdCtgysList,
  getCurrentThirdCtgysList,
  getCurrentThrdCtgy
} = FstToThrdCtgy.ctgyStoreToRef
const tougleisReadyOpen = (isReadyOpen:boolean)=>{
  FstToThrdCtgy.ctgyStore.setIsReadyOpen(isReadyOpen)
}
const changeBread = (thrdctgy:ThirdCtgy) => {
  FstToThrdCtgy.ctgyStore.setCurrentThrdCtgy(thrdctgy)
}
onUnmounted(()=>{
  FstToThrdCtgy.ctgyStore.setIsReadyOpen(true)
})
</script>

<style lang='scss' scoped>
.content{
  width: 5.04rem;
  padding: 0 0.18rem;
  .thrdctgys{
    float: left;
    font-size: 0.16rem;
    margin-right: 0.3rem;
    height: 0.4rem;
    padding: 0.1rem;
    &-item{
      text-shadow: 0rem 0rem 0.01rem black ;
    }
    &-active {
      background-color: red;
      border-radius: 0.2rem;
      color: #fff;
    }
  }
  .icon{
    position: relative;
    right: 0.2rem;
    top: 0.02rem;
  }
  &::after{
    display: block;
    content: '';
    clear: both;
  }
}
</style>
