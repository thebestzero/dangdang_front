<template>
  <div class='login'>
    <img class='pic' :src="getImg('login.png')">
    <div class='username'>
      <input type='text' class='username-input' name='username' placeholder='用户名' v-model="username">
    </div>
    <div class='psw'>
      <input type='text' name='psw' class='psw-input' placeholder='密码' v-model="password">
    </div>
    <div class='loginbtn' @click="login">登录</div>
  </div>
</template>

<script setup lang="ts">
import getImg from '@/utils/imgUtil'
import { toRefs,reactive } from 'vue'
import {userStore} from '@/store/user';
import storage,{OPTION} from '@/utils/goodStorageUtil'
import {useRouter} from 'vue-router';
const store = userStore()
const router = useRouter()
const {username,password} = toRefs(reactive({
  username:'',
  password:''
}))
const login = async () => {
  await store.login(username.value,password.value)
  if (storage.get('token')) router.push({name: 'ctgy'})
}

</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  .pic{
    width: 1.22rem;
    height: 1.22rem;
  }
  .username,.psw{
    width: 4.23rem;
    height: 0.94rem;
    line-height: 0.94rem;
    background-color: #f6f6f6;
    border-radius: 1rem;
    &-input{
      margin-left: 0.3rem;
      width: 85%;
      height: 60%;
      background: none;
      border: none;
    }
  }
  .loginbtn{
    background-color: #f31313;
    border-radius: 1rem;
    width: 4.23rem;
    height: 0.94rem;
    line-height: 0.94rem;
    text-align: center;
    color: #fff;
    font-size: 0.25rem;
    box-shadow: 0 0  0.1rem;
  }
}

</style>
