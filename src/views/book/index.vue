<template>
  <toSearch></toSearch>
  <div class="adv"><img class="adv-img" :src="getImg('1.png')" /></div>
  <div class="bookctgys">
    <breadCrumb></breadCrumb>
    <thirdCtgy></thirdCtgy>
  </div>
</template>

<script setup lang="ts">
import toSearch from './components/toSearch.vue'
import breadCrumb from './components/BreadCrumb.vue'
import thirdCtgy from './components/ThirdCtgys.vue'
import getImg from '@/utils/imgUtil'
</script>

<style lang="scss" scoped>
.adv {
  position: absolute;
  top: 0.86rem;
  margin: 0.18rem;
  width: 5.04rem;
  height: 1.62rem;
  &-img {
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
  }
}
.bookctgys {
  position: absolute;
  top: 2.7rem;
  margin: 0.18rem;
  width: 5.04rem;
  background-color: #9a6e3a;
}
</style>
