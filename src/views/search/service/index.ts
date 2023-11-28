import { ref } from 'vue'
import { initKeywordVal, useSearchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import _ from 'lodash-es'
export default class SearchService {
  static store = useSearchStore()
  static searchStoreRef = storeToRefs(this.store)
  static isOpenAutoComplete = ref(false)

  static  searchKeywords = _.debounce( async () => {
    const keyword = this.store.keyword
    this.isOpenAutoComplete.value = !!keyword
    if (keyword){
      console.log(keyword)
      await this.store.searchKeywords(keyword)
    }
  },400)
  static  init = async ()=>{
    await this.store.searchDecovery()
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
  static chooseKeyword = async (keyword:string)=>{
    this.store.keyword = keyword
    await this.store.addOrUpdateHistoryKeyword(keyword)
    this.isOpenAutoComplete.value = false
  }
}
