import { ref, watchEffect, Ref } from 'vue'
import { useCtgyStore } from '@/store/ctgy'
import { storeToRefs } from 'pinia'
import BookService from '@/views/book/service'
export default class CtgyService {
  static ctgyStore = useCtgyStore()
  static ctgyStoreToRef = storeToRefs(this.ctgyStore)
  static firstCtgyActiveIndex: Ref<number> = ref(0)

  static setCurrentFirstCtgy(index: number) {
    const firstCtgy = CtgyService.ctgyStore.firstCtgyList.find(
      (firstCtgy) => {
        return firstCtgy.firstCtgyId === index
      },
    )!
    CtgyService.ctgyStore.setCurrentFirstCtgy(firstCtgy)
  }
  static async getFirstCtgy() {
    await CtgyService.ctgyStore.findFirstCtgyList()
    CtgyService.setCurrentFirstCtgy(1)
  }
  static changeTab(index: number) {
    CtgyService.firstCtgyActiveIndex.value = index
    CtgyService.setCurrentFirstCtgy(index + 1)
    BookService.uptBookNumWithSCLstNum()
  }
  static getSecThrdCtgyList() {
    watchEffect(async () => {
      await CtgyService.ctgyStore.findSecThrdCtgyList(
        CtgyService.firstCtgyActiveIndex.value + 1,
      )
    })
  }
}
