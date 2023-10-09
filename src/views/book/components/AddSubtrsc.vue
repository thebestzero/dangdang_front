<template>
  <div class='shopcart'>
    <div class='addBtn'
         v-if='bookItem && bookItem.purcharsenum === 0'
    >
      <div class='inner' @click='addBookToShopCart(bookItem)'>添加到购物车</div>
    </div>
    <div v-else>
      <div class='shopcart-operate'
           v-if='bookItem && bookItem.purcharsenum > 0'
      >
        <span class='shopcart-operate-minus' v-show='bookItem.purcharsenum > 1' @click='appOrSubtrBookFrmShoListCart(bookItem,$event)'>
        <span class='inner'>-</span>
      </span>
        <span class='shopcart-operate-del' v-show='bookItem.purcharsenum === 1' @click='delBookShopCart(bookItem)'>
        <span class='inner'><i class='iconfont icon-shanchu shanchu'></i></span>
      </span>
        <span class='purchasenum'>{{bookItem.purcharsenum}}</span>
        <span class='shopcart-operate-add' @click='appOrSubtrBookFrmShoListCart(bookItem,$event)'>
        <span class='inner'>+</span>
      </span>
      </div>
      <div class='shopcart-operate'
           v-else-if='shopCart && shopCart.bookisbn'
      >
        <span class='shopcart-operate-minus' v-show='shopCart.purcharsenum > 1' @click='appOrSubtrBookInShoListCart(shopCart,$event)'>
        <span class='inner'>-</span>
      </span>
        <span class='shopcart-operate-del' v-show='shopCart.purcharsenum === 1' @click='delBookInShopCart(shopCart)'>
        <span class='inner'><i class='iconfont icon-shanchu shanchu'></i></span>
      </span>
        <span class='purchasenum'>{{shopCart.purcharsenum}}</span>
        <span class='shopcart-operate-add' @click='appOrSubtrBookInShoListCart(shopCart,$event)'>
        <span class='inner'>+</span>
      </span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {defineProps} from 'vue'
import {BookItem} from '@/store/book/state'
import ShopCartService from '@/views/book/service/shopCart'
import {ShopCart} from '@/store/shopCart/state';
const {bookItem,shopCart} =  defineProps<{
  bookItem?:BookItem
  shopCart?:ShopCart
}>()
const { addBookToShopCart,appOrSubtrBookFrmShoListCart,appOrSubtrBookInShoListCart,delBookShopCart,delBookInShopCart} = ShopCartService
</script>

<style lang='scss' scoped>
.shopcart{
  margin-top: 0.1rem;
  .addBtn{
    .inner{
      width: 2.5rem;
      //height: 0.32rem;
      line-height: 0.32rem;
      background-color: #fef3ed;
      color: #db8441;
      text-align: center;
      padding: 0.05rem;
      border-radius: 0.2rem;
    }
  }
  &-operate{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
    &-add,&-minus{
      padding: 0.15rem;
      .inner{
        text-align: center;
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        line-height: 0.26rem;
        background-color: #1985f1;
        color: #fff;
        border-radius: 50%;
      }
    }
    &-del{
      padding: 0.15rem;
      .shanchu{
        font-size: 0.3rem;
        position: relative;
        top: 0.03rem;
      }
    }
    .purchasenum{
      font-size: 0.25rem;
    }
  }
}
</style>
