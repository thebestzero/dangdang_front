import { useBookStore } from '@/store/book'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export default class BookDetailService {
  static bookStore = useBookStore()
  static bookStoreToRefs = storeToRefs(this.bookStore)
  static headerOpactiy = ref({ opacity: 0 })
  static picRef = ref<HTMLBodyElement>()
  static init = () => {
    this.scrollToptoZero()
    this.headerOpactiy.value.opacity = 0
  }
  static scrollToptoZero = () => {
    window.pageYOffset = 0
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  static findBookDetail = async () => {
    await this.bookStore.findBookByISBN()
  }

  static bookScroll = () => {
    const scrollTop =
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop
    const picHeight = BookDetailService.picRef.value?.offsetHeight as number
    if (scrollTop > 90) {
      this.headerOpactiy.value.opacity = scrollTop / picHeight
    } else {
      this.headerOpactiy.value.opacity = 0
    }
  }
}
