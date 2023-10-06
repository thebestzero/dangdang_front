import ShopCartApi from '@/api/ShopCart'
import {
  initShopcart,
  ShopCart
} from './state'
import { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import goodStorage from 'good-storage'
import storage,{OPTION} from '@/utils/goodStorageUtil'
import _ from 'lodash'
export const useShopStore = defineStore('shopStore', {
  state: () => {
    return {
      shopCartList: initShopcart,
    }
  },
  getters: {
    getShopCartList(state): ShopCart[] {
      return _.isEmpty(state.shopCartList) ? storage.get('shopCartList') : state.shopCartList
    },
    },
  actions:{
    async findShopCartList(){
      const res:AxiosResponse<ShopCart[]> = await ShopCartApi.getCurUserShopCartList(1)
      this.shopCartList = res.data
      storage.set('shopCartList', res.data)
    },
    async addBookToShopCart(shopCart:ShopCart){
      const res:AxiosResponse<ShopCart> = await ShopCartApi.addBookToShopCart(shopCart)
      const dbShopCart = res.data
      const newVal = storage.set('shopCartList',dbShopCart,OPTION.ADDAPPENDOBJTOARR,'shopcartid',dbShopCart.shopcartid)
      this.shopCartList = newVal
    },
    async appOrSubtrBookFrmShopCart(shopCart:ShopCart){
      const res:AxiosResponse<ShopCart> = await ShopCartApi.addBookToShopCart(shopCart)
      const dbShopCart = res.data
      const newVal = storage.set('shopCartList',dbShopCart,OPTION.ADDAPPENDOBJTOARR,'shopcartid',dbShopCart.shopcartid)
      this.shopCartList = newVal
    },
    async delBookShopCart(shopCartid:number){
      const res:AxiosResponse<number> = await ShopCartApi.delBookShopCart(shopCartid)
      if (res.data > 0){
        storage.remove('shopCartList',OPTION.ADDAPPENDOBJTOARR,'shopcartid',shopCartid)
        this.shopCartList = storage.get('shopCartList',OPTION.ADDAPPENDOBJTOARR)
      }
    }
  }
  })
