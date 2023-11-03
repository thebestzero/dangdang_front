import { defineStore } from 'pinia'

export const initKeywordVal = '请输入搜索的图书关键字'
export const useSearchStore = defineStore('searchStore', {
  state: () => {
    return {
      keyword: initKeywordVal,
    }
  },
  getters: {
    getKeyword(state) {
      return state.keyword
    },
  },
  actions: {
    storeKeyword(keyword: string = '') {
      this.keyword = keyword
    },
  },
})
