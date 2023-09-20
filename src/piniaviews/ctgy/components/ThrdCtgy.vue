<template>
  <ul class="thrdctgy">
    <li
      class="thrdctgy-item"
      v-for="(item, index) in isReadyOpen ? subThirdCtgys : thrdCtgys "
      :key="item.thirdctgyId"
      @click='toRouter'
    >
      <span class="thirdctgyname">{{ item.thirdname }}</span>
      <i class="iconfont icon-shuxian" :class='{shuxianHide: (index+1) % 3 === 0}'></i>
    </li>
    <div :class='{ readyOpen:isReadyOpen,readycollapse:!isReadyOpen}'
      @click='openOrCollapse($event,secondCtgy)'
    >
      <span v-show='isReadyOpen'>
        展开
        <span class="circle-icon">
          <i class="iconfont icon-xiangxiajiantou"></i>
      </span>
      </span>
      <span v-show='!isReadyOpen'>
        收起
        <span class="circle-icon">
        <i class="iconfont icon-xiangshangjiantou"></i>
         </span>
      </span>
    </div>
  </ul>
</template>
<script setup lang='ts'>
import {FirstCtgy,SecondCtgy,ThirdCtgy} from '@/piniastore/ctgy/state'
import {defineProps} from 'vue'
import {useRouter} from 'vue-router'
const {thrdCtgys, secondCtgy, isReadyOpen, subThirdCtgys,
} = defineProps<{thrdCtgys:ThirdCtgy[],secondCtgy:SecondCtgy,isReadyOpen:boolean,subThirdCtgys:ThirdCtgy[]}>()

/*
* 这是由于 Vue 3 使用了 Proxy 对象来实现响应式系统。当父组件传递对象类型的 prop 给子组件时，Vue 3 会在内部使用 Proxy 对象对这个对象进行封装，以便能够监听到对于对象的属性修改。当子组件对对象进行属性修改时，Vue 3 会通过 Proxy 对象捕捉到这些修改，并触发相应的更新。
* */
const openOrCollapse = (event:Event, secondCtgy:SecondCtgy)=>{
  const currentTarget = <HTMLBodyElement>event.currentTarget
  const ulPanel = currentTarget.parentElement!
  if (secondCtgy.isReadyOpen){
    secondCtgy.isReadyOpen = false
    if (secondCtgy.thirdCtgys.length % 3 === 0) ulPanel.style.paddingBottom = 0.5 + 'rem'
  }else {
    secondCtgy.isReadyOpen = true
    ulPanel.style.paddingBottom = '0'
  }
}
const router = useRouter()
const toRouter = ()=>{
  router.push({
    name:'book'
  })
}
</script>

<style lang="scss" scoped>
.thrdctgy {
  display: grid;
  padding: 0rem 0.05rem 0rem 0.1rem;
  grid-template-columns: 1.18rem 1.1rem 1.25rem;
  position: relative;
  &-item {
    padding: 0.2rem 0rem;
    text-align: center;
    display: flex;
    .thirdctgyname {
      flex: 1;
    }
    .shuxianHide{
      opacity: 0;
    }
    .icon-shuxian{
      position: relative;
      top: 0.02rem;
    }
  }
  .readyOpen{
    width: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -0.01rem;
  }
  .readycollapse{
    position: absolute;
    left: 2.7rem;
    bottom: 0.2rem;
  }
  .circle-icon {
    display: inline-block;
    position: relative;
    z-index: 1;
  }
  .circle-icon::before {
    content: "";
    width: 0.16rem; /* 替换为你想要的宽度 */
    height: 0.16rem; /* 替换为你想要的高度 */
    border: 1px solid #2a2a2a;
    border-radius: 50%; /* 将宽高设置为相等的值，并设置为圆形 */
    position: absolute;
    top: 0.01rem; /* 调整圆圈位置 */
    left: -0.01rem; /* 调整圆圈位置 */
  }
}
</style>

