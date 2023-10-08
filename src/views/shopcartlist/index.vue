<template>
  <div class='shopcartlist'>
    <div class='header'>
      <input type='checkbox' class='check'>
      <span class='label'>当当网</span>
    </div>
    <div class='items'>
      <div class='item'>
        <div class='content'>
          <input type='checkbox' class='check'>
          <div class='pic'>
            <img :src="getImg('1童年.png')">
          </div>
          <div class='descri'>
            <div class='book-title'>童年</div>
            <div class='price'>
              <div class='curprice'>&yen;89.33</div>
              <span>添加购物车组件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='cal'>
      <span class='checkall'>
        <input type='checkbox'>
        <span class='label'>全选</span>
        <span class='total'>
          合计:
          <span class='money'>&yen;987.33</span>
        </span>
        <span class='pay'>去结算3433.33</span>
      </span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import getImg from '@/utils/imgUtil'
</script>

<style lang='scss' scoped>

</style>
