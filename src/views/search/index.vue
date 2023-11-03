<template>
  <div class="search">
    <div class="search-header">
      <i class="iconfont icon-xiangzuojiantou back" @click="router.back()"></i>
      <span class="search-text">搜索</span>
    </div>
    <div class="search-keyword">
      <div class="search-keyword-wrapper">
        <i class="iconfont icon-fangdajing fangdajing"></i>
        <input type="text" class="search-keyword-text" placeholder="神奇校车" v-model="keyword"
          @keyup="searchKeywords" @blur="closeKeywords" @focus="resetKeywords"
        >
      </div>
      <span class="searchbtn">搜索</span>
    </div>
    <div class="autocomplete" v-show="isOpenAutoComplete">
      <div class="autocomplete-item" v-for="(keyword,index) in keywords" :key="index">
        <span class="keyword">{{keyword}}</span>
      </div>
    </div>
    <div class="search-history">
      <div class="search-history-header">
        <span class="historytext">搜索历史</span>
        <i class="iconfont icon-shanchu"></i>
      </div>
      <div class="search-history-items">
        <div class="item" v-for="(item,index) in items">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import searchService from './service'
const router = useRouter()
const {isOpenAutoComplete,searchKeywords,closeKeywords,resetKeywords,searchStoreRef} = searchService
const {keyword} = searchStoreRef
const items = ['六年级作业','语文','数学','六年级作业','语文','数学','六年级作业','语文','数学']
const keywords = ['六年级上册','六年级同步作业','六年级+七年级作业','六年级中册','六年级下册']
</script>

<style lang="scss" scoped>
.search{
  width: 5.4rem;
  padding: .13rem 0;
  &-header{
    display: flex;
    align-items: center;
    height: .54rem;
    border-bottom: 1px solid #f6f6f6;
    .back{
      font-size: .3rem;
    }
    .search-text{
      flex: 1;
      font-size: .22rem;
      text-align: center;
      font-weight: bolder;
    }
  }
  &-keyword{
    display: flex;
    align-items: center;
    height: .75rem;
    gap: 0.2rem;
    width: 5.14rem;
    margin: 0 0.13rem;
    &-wrapper{
      flex: 1;
      height: .5rem;
      background-color: #f6f6f6;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      .search-keyword-text{
        flex: 1;
        height: 100%;
        background: none;
        border: none;
        font-size: .2rem;
      }
      .fangdajing{
        margin-right: .12rem;
        margin-left: .23rem;
        font-size: .26rem;
      }
    }
    .searchbtn{
      width: .5rem;
      font-weight: bold;
      font-size: .2rem;
    }
  }
  .autocomplete{
    position: fixed;
    width: 5.4rem;
    height: calc(100% - 0.85rem);
    background-color: #f6f6f6;
    &-item{
      display: flex;
      align-items: center;
      height: 0.5rem;
      border-bottom: 1px solid #f4f4f4;
      padding: 0 0.1rem;
    }
  }
  &-history{
    width: 5.14rem;
    margin: 0 0.13rem;
    &-header{
      display: flex;
      height: .4rem;
      align-items: center;
      justify-content: space-between;
      .historytext{
        font-weight: bolder;
        text-shadow: 0 0 0.01rem gray;
        font-size: .19rem;
      }
      .del{
        font-size: .23rem;
      }
    }
    &-items{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-auto-flow: row;
      margin-left: .06rem;
      margin-top: .2rem;
      gap: .15rem;
      .item{
        height: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f6f6f6;
        border-radius: 1rem;
      }
    }
  }
}
</style>