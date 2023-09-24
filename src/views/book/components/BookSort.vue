<template>
  <ul class='book-sort'>
    <li class='compsive'><span class='inner'>综合</span></li>
    <li
      :class="{selected:sortField === 'monthsalecount'}"
      @click="sortBook('monthsalecount')"
      >销量</li>
    <li
      :class="{selected:sortField === 'price'}"
      @click="sortBook('price')">
      价格
      <span class='ascdesc'>
        <i
          v-show='isReadyAsc'
          class='iconfont icon-zuoce-xiangxiaxiaojiantousvg'></i>
        <i
          v-show='!isReadyAsc'
          class='iconfont icon-zuoce-xiangshangxiaojiantou'></i>
      </span>
    </li>
    <li class='shop'>店铺</li>
    <li class='dressing'>
      筛选
      <i class='iconfont icon-shaixuan'></i>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import BookService from '@/views/book/service'
const {sortBook,isReadyAsc,sortField} = BookService
</script>

<style lang='scss' scoped>
  .book-sort{
    display: flex;
    font-size: 0.16rem;
    width: 100%;
    margin-left: 0.18rem;
    > li{
      flex: 1;
      display: flex;
      align-items: center;
      &.selected{
        color: red;
      }
    }
  }
</style>
