<template xmlns="http://www.w3.org/1999/html">
<div class="goods">
  <i class="iconfont icon-yuan-shixin-zuojiantou leftarrow" @click="router.back()"></i>
  <div class="pic" ref="picRef">
    <img :src="getImg(getBookDetail.bookpicname)">
  </div>
  <div class="goods-detail">
    <div class="price-detail">
      <div class="favourable">
        <span class="discount-price">
          <strong class="symbol">&yen;</strong>
          <strong class="discountprice">{{(getBookDetail.discount * getBookDetail.originalprice).toFixed(2)}}</strong>
        </span>
        <span class="discount-condition">
          <span class="inner">每满100减50</span>
        </span>
          <i class="iconfont icon-jiangjiatongzhi1 jiangjia"></i>
      </div>
      <div class="other">
        <span class="original-price">定价&yen;{{getBookDetail.originalprice}}</span>
        <span class="discount">{{getBookDetail.discount}}折</span>
        <span class="reduction-notice">降价通知</span>
      </div>
    </div>
    <div class="book-title">{{getBookDetail.bookname}}</div>
    <div class="book-introduce">
      <p>★汪曾祺先生经典代表作</p>
      <p>重温曾经消逝的古典主义的名士风散文的魅力，中国现代文学史上的一座丰碑！</p>
      <p>★名家手绘漫画插图</p>
      <p>品味美文，欣赏名画，不一样的阅读新体验！</p>
      <p>★认识喜欢生活气的汪曾祺</p>
      <p>“父亲在洗刮鸭掌。每个蹠蹼都掰开来仔细看过，是不是还有一丝泥垢，一片没有去尽的皮，就像在做一件精巧的手工似的。两副鸭掌白白净净，妥妥停停，排成一排。四只鸭翅，也白白净净，排成一排。很漂亮，很可爱。”</p>
      <p>★欣赏中国传统文化的韵味和美感</p>
      <p>“阳城是一片古战场。相传韩信在这里打过仗。现在还能挖到一种有耳的尖底陶瓶，当地叫做“韩瓶”，据说是韩信的部队所用的行军水壶。说是这种陶瓶冬天插了梅花，能结出梅子来。现在这里是乱葬岗，不知道从什么时候起叫做“阴城”。到处是坟头、野树、荒草、芦荻。草里有蛤蟆、野兔子、大极了的蚂蚱、油葫芦、蟋蟀。</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import BookDetailService from '../service/index'
import getImg from '@/utils/imgUtil'
import {onMounted, onUnmounted} from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter()
const {bookStoreToRefs,findBookDetail,bookScroll,picRef} = BookDetailService
const {bookDetail,getBookDetail} = bookStoreToRefs
onMounted(() => {
  window.addEventListener('scroll',bookScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll',bookScroll)
})
findBookDetail()
</script>

<style lang="scss" scoped>
.goods{
  position: absolute;
  top: 0rem;
  left: 0rem;
  .leftarrow{
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    font-size: 0.4rem;
    opacity: 0.4;
  }
  .pic{
    margin-top: 0.2rem;
    display: flex;
    width: 5.4rem;
    height: 3.5rem;
    justify-content: center;
    .img{
      width: 80%;
      height: 90%;
      object-fit: contain;
    }
  }
  &-detail{
    width: 5.4rem;
    height: 1.5rem;
    background-image: linear-gradient(#ff5244 35%,#ffc3bc,#fff);
    border-radius: 0.2rem 0.2rem 0rem 0rem;
    box-shadow: 0rem -0.01rem 0.01rem 0.01rem gainsboro;
    .price-detail{
      margin-top: 0.1rem;
      width: 5.1rem;
      padding: 0 0.15rem;
      height: 1.04rem;
      color: #fff;
      font-size: 0.2rem;
      .favourable,.other{
        line-height: 0.35rem;
        display: flex;
        align-items: center;
        .discount-price{
          width: 0.94rem;
          text-shadow: 0rem 0rem 0.02rem gray;
        }
        .discount-condition{
          flex: 1;
          .inner{
            border: 1px solid gray;
            box-shadow: 0rem 0.01rem 0.03rem 0.02rem #fff inset;
            padding: 0.05rem;
            border-radius: 0.05rem;
          }
        }
        .jiangjia{
          width: 0.7rem;
          font-size: 0.3rem;
        }
      }
      .other{
        .original-price{
          width: 1.2rem;
          text-decoration: line-through;
        }
        .discount{
          flex: 1;
          text-shadow: 0rem 0rem 0.02rem gray;
        }
      }
    }
    .book-title{
            margin-top: 0.5rem;
      font-size: 0.2rem;
      font-weight: bolder;
      color: #0d0d0d;
    }
    .book-introduce{
                  margin-top: 0.1rem;
      font-size: 0.17rem;
      color: #8e8e8e;
      height: 0.7rem;
      line-height: 0.3rem;
    }
  }
}
</style>