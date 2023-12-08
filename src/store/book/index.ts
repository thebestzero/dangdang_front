import { BookItem, BookState } from '@/store/book/state'
import BookApi from '@/api/BookApi'
import { defineStore } from 'pinia'
import _ from 'lodash'
import goodStorage from 'good-storage'
import { AxiosResponse } from 'axios'
import bookApi from '@/api/BookApi'
export const useBookStore = defineStore('BookStore', {
  state: (): BookState => {
    return {
      bookList: [],
      bookDetail: {} as BookItem,
      isbn:''
    }
  },
  getters: {
    getBookList(state): BookItem[] {
      return _.isEmpty(state.bookList)
        ? goodStorage.get('bookList')
        : state.bookList
    },
    getBookDetail(state): BookItem {
      return _.isEmpty(state.bookDetail)
        ? goodStorage.get('bookDetail')
        : state.bookDetail
    },
    getIsbn(state){
      return state.isbn === '' ? goodStorage.get('isbn') : state.isbn
    }
  },
  actions: {
    storeBookIsbn(isbn:string){
      this.isbn = isbn
      goodStorage.set('isbn',isbn)
    },
    async getBooksByThirdCtgyId(
      thirdCtgyId: number,
      sortField: string,
      ascOrDesc: string,
    ) {
      const res = await BookApi.getBooksByThirdCtgyId(
        thirdCtgyId,
        sortField,
        ascOrDesc,
      )
      this.bookList = res.data
      goodStorage.set('bookList', res.data)
      console.log(thirdCtgyId, res.data)
    },
    async getBooksBySecCtgyId(
      secondctgyId: number,
      sortField: string,
      ascOrDesc: string,
    ) {
      const res = await BookApi.getBooksBySecCtgyId(
        secondctgyId,
        sortField,
        ascOrDesc,
      )
      this.bookList = res.data
      goodStorage.set('bookList', res.data)
      console.log(secondctgyId, res.data)
    },
    async findBookByISBN() {
      const bookDetail: AxiosResponse<BookItem> =
      await bookApi.findBookByISBN(this.getIsbn)
      this.bookDetail = bookDetail.data
      goodStorage.set('bookDetail', bookDetail.data)
    },
  },
})
