<template>
  <div class="shopcartlist">
    <div class="header">
      <i class="iconfont icon-xiangzuojiantou back" @click="router.back()"></i>
      <input type="checkbox" class="check" />
      <span class="label">当当网</span>
    </div>
    <div class="items">
      <div class="item" v-for="(item,index) in shopCartList" :key="item.shopcartid">
        <div class="content">
          <input type="checkbox" class="check" />
          <div class="pic">
            <img  class="bookimg" :src="getImg(item.bookpicname)" />
          </div>
          <div class="descri">
            <div class="book-title">{{ item.bookname }}</div>
            <div class="price">
              <div class="curprice">&yen;{{ item.bookprice.toFixed(2) }}</div>
              <span class="shopcartnum">
                <AddSubtrsc :shopCart="item"></AddSubtrsc>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cal">
      <span class="checkall">
        <input type="checkbox" class="check"/>
        <span class="label">全选</span>
        <span class="total">
          合计:
          <span class="money">&yen;{{totalPrice}}</span>
        </span>
      </span>
      <span class="pay">去结算{{totalCount}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import getImg from '@/utils/imgUtil'
import ShopCartService from '@/views/book/service/shopCart';
import AddSubtrsc from '@/views/book/components/AddSubtrsc.vue'
import {useRouter} from 'vue-router';
const {shopCartList} = ShopCartService.shopStoreToRefs
const { totalCount, totalPrice } = ShopCartService.computeTotal()

const router = useRouter()

</script>

<style lang="scss" scoped>
.shopcartlist {
  padding: 0 0.13rem;
  .check{
    width: .33rem;
    height: .22rem;
    cursor: pointer;
  }
  .header {
    position: fixed;
    width: 5.14rem;
    height: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    z-index: 10;
    .back,.label{
      font-size: 0.25rem;
    }
  }
  .items{
    overflow-y: scroll;
    position: absolute;
    top: 0.86rem;
    bottom: 0.865rem;
    display: grid;
    grid-template-columns: 5.14rem;
    grid-template-rows: 2.89rem;
    .content{
      display: flex;
      align-items: center;
      .pic{
        width: 1.539rem;
        height: 2.16rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .bookimg{
          width: 80%;
          height: 70%;
        }
      }
      .descri{
        width: 3.21rem;
        font-size: .23rem;
        .book-title{
          height: 0.8rem;
          color: #272727;
        }
        .price{
          height: 1rem;
          display: flex;
          color:#ea5340;
          width: 100%;
          font-size: .2rem;
          align-items: center;
          .curprice{
            flex: 1;
          }
          .shopcartnum{
            flex: 2;
          }
        }
      }
    }
  }
  .cal{
    width: 5.14rem;
    margin: 0 .13rem;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.86rem;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .22rem;
    .checkall{
      display: flex;
      gap: .1rem;
      align-items: center;
      .total{
        font-weight: bolder;
      }

    }
    .pay{
      width: 1.8rem;
      height: .6rem;
      background-color: #ed1611;
      color: #fff;
      border-radius: .288rem;
      text-shadow: 0 0 0.01rem #3f3f3f;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.03rem;
    }
  }
}
</style>
