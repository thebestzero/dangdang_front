<template>
  <div class="breadCrumb">
    <div>{{getCurrentFirstCtgy.name}}</div>
    <i class="iconfont icon-xiangyoujiantou"></i>
    <div>{{getCurrentSecondCtgy.secctgyname}}</div>
  </div>
</template>

<script setup lang="ts">
import CtgyService from '@/views/ctgy/service'
const {ctgyStoreToRef} = CtgyService
const {getCurrentFirstCtgy,getCurrentSecondCtgy} = ctgyStoreToRef
</script>

<style lang="scss" scoped>
  .breadCrumb{
    display: flex;
    align-items: center;
    font-size: 0.18rem;
    padding: 0.1rem 0.18rem;
    gap:0.1rem;
    font-weight: bold;
  }
</style>
