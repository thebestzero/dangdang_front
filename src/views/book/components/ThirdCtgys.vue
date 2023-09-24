<template>
  <div class='content'>
    <div class='thrdctgys'
         :class="{'thrdctgys-active':getCurrentThrdCtgy.thirdctgyId === 10086}"
         @click='chooseAll'>
      <span class='thrdctgys-item'  >全部</span></div>
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
import CtgyService from '@/views/ctgy/service'
import BookService from '@/views/book/service'
import { onUnmounted } from 'vue'
import {ThirdCtgy} from '@/store/ctgy/state';
const {
  isReadyOpen,
  getCurrentSubThirdCtgysList,
  getCurrentThirdCtgysList,
  getCurrentThrdCtgy,
  getCurrentSecondCtgy
} = CtgyService.ctgyStoreToRef
const {changeBread} = BookService
const tougleisReadyOpen = (isReadyOpen:boolean)=>{
  CtgyService.ctgyStore.setIsReadyOpen(isReadyOpen)
}
const chooseAll = ()=>{
  console.log('chooseAll')
  CtgyService.ctgyStore.setCurrentThrdCtgy({
    thirdname:'',
    thirdctgyId:10086
  })
  BookService.requestFullBookList(getCurrentSecondCtgy.value.secondctgyId)
}
onUnmounted(()=>{
  CtgyService.ctgyStore.setIsReadyOpen(true)
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
    width: 0.2rem;
    height: 0.2rem;
    position: relative;
    right: -4rem;
    top: -0.7rem;
  }
  &::after{
    display: block;
    content: '';
    clear: both;
  }
}
</style>
