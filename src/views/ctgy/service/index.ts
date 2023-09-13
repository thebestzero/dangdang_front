import { ref, watchEffect,Ref } from 'vue'
import {FirstCtgy,SecondCtgy} from '@/store/ctgy/state'
import { CtgyActions } from '@/store/ctgy/actions'
import { ctgyGettersProxy } from '@/store/ctgy/getters'

export default class FstToThrdCtgy{
  static firstCtgyActiveIndex: Ref<number> = ref(0);
  static firstCtgyList: Ref<FirstCtgy[]> = ref([]);
  static secondCtgyList: Ref<SecondCtgy[]> = ref([]);

  static async getFirstCtgy() {
    await CtgyActions.findFirstCtgyList()
    FstToThrdCtgy.firstCtgyList.value = ctgyGettersProxy.getFirstCtgyList
  }
  static  changeTab(index:number) {
    FstToThrdCtgy.firstCtgyActiveIndex.value = index
  }
  static getSecThrdCtgyList() {
    watchEffect(async ()=>{
      await CtgyActions.findSecThrdCtgyList(FstToThrdCtgy.firstCtgyActiveIndex.value + 1)
      FstToThrdCtgy.secondCtgyList.value = ctgyGettersProxy.getSecondCtgyLst
      console.log(FstToThrdCtgy.secondCtgyList)
    })
  }
}
