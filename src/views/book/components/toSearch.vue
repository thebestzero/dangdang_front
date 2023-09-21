<template>
  <div class="content">
    <i class="iconfont icon-zuojiantou" @click="backRouter"></i>
    <div class="tosearch">
      <i class="iconfont icon-fangdajing"></i>
      <div class="tosearch-content">
        <input type="text" />
        <span>
            <div>
              {{getCurrentThrdCtgy.thirdname}}
              <i class="iconfont icon-close"></i>
            </div>
          </span>
      </div>
    </div>
    <i class="iconfont icon-gengduosangedian"></i>
  </div>
</template>

<script setup lang="ts">
import {useCtgyStore} from '@/store/ctgy';
import {storeToRefs} from 'pinia';
import {useRouter} from 'vue-router';
// import {searchService} from '../service'
const store = useCtgyStore()
const router = useRouter()
// const {backRouter} = searchService
const {getCurrentThrdCtgy} = storeToRefs(store)
const backRouter = () => {
  router.back()
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.content {
  @extend .common-content;
  .tosearch {
    @extend .common-to-search;
    .tosearch-content{
      display: grid;
      width: 100%;
      grid-template-columns: 3rem;
      align-items: center;
      input,
      span,
      i {
        grid-row: 1/2;
        grid-column: 1/2;
      }
      input {
        height: 0.25rem;
        background: none;
        border: none;
        font-size: 0.25rem;
      }
      span {
        div {
          background: rgba(0, 0, 0, 0.2);
          display: inline-block;
          padding: 0.1rem 0.15rem 0.1rem 0.1rem;
          border-radius: 1rem;
          position: relative;
          // display: flex;
          align-items: center;
          // .icon-close {

          // }
        }
        // width: 1rem;
      }
      i {
        font-size: 0.15rem;
        // position: absolute;
        // right: 0.05rem;
      }
    }
  }

  .icon-gengduosangedian,
  .icon-zuojiantou,
  .icon-fangdajing {
    font-size: 0.2rem;
  }
  .icon-fangdajing {
    margin-left: 15px;
  }
}
</style>
