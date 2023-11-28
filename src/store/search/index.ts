import { defineStore } from 'pinia'
import { AxiosResponse } from 'axios'
import searchApi from '@/api/SearchApi'
import storage,{OPTION} from '@/utils/goodStorageUtil'

export const initKeywordVal = '请输入搜索的图书关键字'
export const useSearchStore = defineStore('searchStore', {
  state: () => {
    return initeState
  },
  getters: {
    getKeyword(state) {
      return state.keyword
    },
    getHistoryKeywordList(state){
      return state.historyKeywordList.length > 0 ? state.historyKeywordList : storage.get('historyKeywordList')
    },
    getHistorykeywordObjslist(state):HistoryKeyword[]{
      const storedValue = storage.get('historykeywordObjslist');
      return state.historykeywordObjslist.length > 0 ? state.historykeywordObjslist : (storedValue !== undefined ? storedValue : []);
    }
  },
  actions: {
    storeKeyword(keyword: string = '') {
      this.keyword = keyword
    },
    async searchKeywords(key:string){
      const keywordList : AxiosResponse<Keyword[]>= await searchApi.searchKeywords(key)
      this.keywordList = keywordList.data
    },
    async addOrUpdateHistoryKeyword(historykeyword:string){
      const res : AxiosResponse<number>= await searchApi.addOrUpdateHistoryKeyword(historykeyword)
      if (res.data > 0){
        const historykeywordlist = storage.set('historykeywordlist',historykeyword,OPTION.ACCUMU)
        this.historyKeywordList = historykeywordlist
      }
    },
    async searchDecovery(){
      const res : AxiosResponse<HistoryKeyword[]>= await searchApi.searchDecovery()
       storage.set('historykeywordObjslist',res.data)
      this.historykeywordObjslist = res.data
    }
  },
})

export interface Keyword{
  id:number;
  keyword:string
}
interface HistoryKeyword{
  historykeywordid:number;
  historykeyword:string;
  clickcount:number
}
type initStateType = {
  keyword: string;
  keywordList: Keyword[];
  historyKeywordList: HistoryKeyword[]
  historykeywordObjslist: HistoryKeyword[]
}

const initeState:initStateType = {
  keyword: initKeywordVal,
  keywordList:[],
  historyKeywordList:[],
  historykeywordObjslist:[]
}
