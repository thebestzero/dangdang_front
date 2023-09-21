import { ref, watchEffect, Ref } from 'vue'
import { useCtgyStore } from '@/store/ctgy'
import { storeToRefs } from 'pinia'
export default class FstToThrdCtgy {
  static ctgyStore = useCtgyStore()
  static ctgyStoreToRef = storeToRefs(this.ctgyStore)
  static firstCtgyActiveIndex: Ref<number> = ref(0)

  static setCurrentFirstCtgy(index: number) {
    const firstCtgy = FstToThrdCtgy.ctgyStore.firstCtgyList.find(
      (firstCtgy) => {
        return firstCtgy.firstCtgyId === index
      },
    )!
    FstToThrdCtgy.ctgyStore.setCurrentFirstCtgy(firstCtgy)
  }
  static async getFirstCtgy() {
    await FstToThrdCtgy.ctgyStore.findFirstCtgyList()
    FstToThrdCtgy.setCurrentFirstCtgy(1)
  }
  static changeTab(index: number) {
    FstToThrdCtgy.firstCtgyActiveIndex.value = index
    FstToThrdCtgy.setCurrentFirstCtgy(index + 1)
  }
  static getSecThrdCtgyList() {
    watchEffect(async () => {
      await FstToThrdCtgy.ctgyStore.findSecThrdCtgyList(
        FstToThrdCtgy.firstCtgyActiveIndex.value + 1,
      )
    })
  }
}
