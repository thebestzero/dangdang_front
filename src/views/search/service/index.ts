import { ref } from 'vue'
import { initKeywordVal, useSearchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
export default class SearchService {
  static store = useSearchStore()
  static searchStoreRef = storeToRefs(this.store)
  static isOpenAutoComplete = ref(false)
  static searchKeywords = () => {
    const keyword = this.store.keyword
    this.isOpenAutoComplete.value = !!keyword
  }
  static resetKeywords = () => {
    const keyword = this.store.keyword
    if (keyword === initKeywordVal) {
      this.store.storeKeyword()
    } else {
      this.isOpenAutoComplete.value = true
    }
  }
  static closeKeywords = () => {
    const ketword = this.store.keyword
    if (!ketword) {
      this.store.storeKeyword(initKeywordVal)
    }
    this.isOpenAutoComplete.value = false
  }
}
