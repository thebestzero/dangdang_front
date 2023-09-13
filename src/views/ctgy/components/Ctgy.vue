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
  </div>
</template>

<script setup lang="ts">
import {FirstCtgy,SecondCtgy} from '@/store/ctgy/state'
import { ref, watchEffect } from 'vue'
import {CtgyActions} from '@/store/actions'
import {ctgyGettersProxy} from '@/store/getters'
import FstToThrdCtgy from '../service/index'

const {firstCtgyActiveIndex,firstCtgyList,secondCtgyList,getFirstCtgy,changeTab,getSecThrdCtgyList} = FstToThrdCtgy
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
