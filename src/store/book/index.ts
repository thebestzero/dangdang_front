import {BookItem,BookState} from '@/store/book/state'
import BookApi from '@/api/BookApi'
import {defineStore} from 'pinia'
import _ from 'lodash'
import goodStorage from 'good-storage'
export const useBookStore = defineStore('BookStore',{
  state:():BookState=>{
    return {
      bookList:[],
    }
  },
  getters:{
    getBookList(state):BookItem[]{
      return _.isEmpty(state.bookList) ? goodStorage.get('bookList') : state.bookList
    },
  },
  actions:{
    async getBooksByThirdCtgyId(thirdCtgyId:number,sortField:string,ascOrDesc:string) {
      const res = await BookApi.getBooksByThirdCtgyId(thirdCtgyId,sortField,ascOrDesc)
      this.bookList = res.data
      goodStorage.set('bookList',res.data)
      console.log(thirdCtgyId,res.data)
    },
    async getBooksBySecCtgyId(secondctgyId:number,sortField:string,ascOrDesc:string) {
      const res = await BookApi.getBooksBySecCtgyId(secondctgyId,sortField,ascOrDesc)
      this.bookList = res.data
      goodStorage.set('bookList',res.data)
      console.log(secondctgyId,res.data)
    },
  }

})
