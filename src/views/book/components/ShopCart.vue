<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left" @click="router.push({name:'shopcartlist'})">
        <i class="iconfont icon-gouwuche gouwuche"></i>
        <div class="num" v-show="totalCount > 0">{{ totalCount }}</div>
        <div class="ball-container">
            <transition
              @before-enter="beforeBall"
              @enter="balling"
              @after-enter="afterBall"
              >
              <div class="ball" v-show="ball.showHidden">
                <div class="inner"></div>
              </div>
            </transition>
        </div>
      </div>
      <div class="content-right">
        <span class="totalPrice" v-show="totalPrice > 0"
          >&yen;{{ totalPrice.toFixed(2) }}</span
        >
        <div class="toPay">
          去支付
          <i class="iconfont icon-xiangyoujiantou xiangyoujiantou"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import ShopCartService from '@/views/book/service/shopCart'
const { totalCount, totalPrice } = ShopCartService.computeTotal()
const { ball,beforeBall,balling,afterBall } = ShopCartService
const router = useRouter()
</script>

<style scoped lang="scss">
.shopcart {
  background: #fff;
  height: 0.8rem;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    display: flex;
    gap: 0.4rem;
    &-left,
    &-right {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.1rem;
    }
    &-left {
      width: 0.8rem;
      position: relative;
      .ball-container {
        .ball {
          position: fixed;
          left: 0.65rem;
          bottom: 0.22rem;
          width: 0.16rem;
          height: 0.16rem;
           //border-radius: 50%;
           //background-color: #1985f1;
          transition: all 0.3s cubic-bezier(0.48, -0.35, 0.78, 0.45);
          .inner {
            width: 0.16rem;
            height: 0.16rem;
            border-radius: 50%;
            background-color: #1985f1;
            transition: all 0.3s linear;
          }
        }
      }
      .gouwuche {
        font-size: 0.35rem;
      }
      .num {
        position: absolute;
        font-size: 0.1rem;
        color: #fff;
        background: red;
        // padding: 0 0.06rem;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        top: 0.06rem;
        right: 0.1rem;
      }
    }
    &-right {
      flex: 1;
      width: 3.5rem;
      height: 0.53rem;
      font-size: 0.29rem;
      background-color: #ffd102;
      color: #0d0d0d;
      border-radius: 0.4rem;
      .totalPrice {
        font-weight: bolder;
      }
      .xiangyoujiantou {
        position: relative;
        top: -0.05rem;
      }
    }
  }
}
</style>
