<template>
  <div class="content">
    <ul class="firstctgy">
      <li
        :class="{
          'firstctgy-item': true,
          'firstctgy-item_active': firstCtgyActiveIndex === index,
        }"
        v-for="(item, index) in firstCtgyList"
        :key="item.firstCtgyId"
        @click='changeTab(index)'
      >
        <span class="firstctgyname">{{ item.name }}</span>
      </li>
    </ul>
    <div class="secondthrdctgy">
      <ul>
        <li
          class="secondthrdctgy-item"
          v-for="(item, index) in secondCtgyList"
          :key="item.secondctgyId"
        >
          <div class="secondctgy-item">
            <span class="secctgyname">{{ item.secctgyname }}</span>
            <span class="secctgynameshop"
            >{{ item.secctgyname }}馆
              <i class="iconfont icon-xiangyoujiantou"></i>
            </span>
          </div>
          <ThirdCtgy :secondCtgy= 'item' :thrdCtgys="item.thirdCtgys"  :subThirdCtgys='item.subThirdCtgys'/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import FstToThrdCtgy from '../service/index'
import  ThirdCtgy  from './ThrdCtgy.vue'
const {firstCtgyActiveIndex,getFirstCtgy,changeTab,getSecThrdCtgyList,ctgyStoreToRef} = FstToThrdCtgy
const {firstCtgyList,secondCtgyList} = ctgyStoreToRef
getFirstCtgy()
getSecThrdCtgyList()
</script>


<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  width: 100%;
  top: 1.03rem;
  left: 0rem;
  // height: calc(100vh - 1.03rem);
  bottom: 0.85rem;
  gap: 0.1rem;
  .firstctgy {
    width: 1.3rem;
    // height: 100vh;
    flex-basis: 1.3rem;
    overflow-y: auto;
    &-item {
      height: 0.78rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .firstctgy-item_active {
      color: red;
      text-shadow: 0 0 0.03rem #2a2a2a;
      background-color: #f7f7f7;
      .firstctgyname {
        border-left: 3px solid red;
        width: 100%;
        text-align: center;
      }
    }
  }
  .secondthrdctgy {
    flex: 1;
    margin-right: 0.19rem;
    overflow-y: auto;
    &-item {
      background-color: #fff;
      .secondctgy-item {
        height: 0.73rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.2rem;
        .secctgyname {
          color: #0d0d0d;

          font-weight: bold;
        }
        .secctgynameshop {
          color: #535353;
        }
      }
    }
  }
}
</style>
