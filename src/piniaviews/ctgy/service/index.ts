import { ref, watchEffect,Ref } from 'vue'
import {useCtgyStore} from '@/piniastore/ctgy'
import {storeToRefs} from 'pinia'

export default class FstToThrdCtgy{
  static ctgyStore = useCtgyStore();
  static ctgyStoreToRef = storeToRefs(this.ctgyStore)
  static firstCtgyActiveIndex: Ref<number> = ref(0);

  static async getFirstCtgy() {
    await FstToThrdCtgy.ctgyStore.findFirstCtgyList()
  }
  static  changeTab(index:number) {
    FstToThrdCtgy.firstCtgyActiveIndex.value = index
  }
  static getSecThrdCtgyList() {
    watchEffect(async ()=>{
      await FstToThrdCtgy.ctgyStore.findSecThrdCtgyList(FstToThrdCtgy.firstCtgyActiveIndex.value + 1)
    })
  }
}
