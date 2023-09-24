import {useBookStore} from '@/store/book'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import CtgyService from '@/views/ctgy/service'
import { ThirdCtgy } from '@/store/ctgy/state'
export default class BookService{
  static bookStore = useBookStore()
  static bookStoreToRefs = storeToRefs(this.bookStore)
  static isReadyAsc = ref(true)
  static sortField = ref('')
  static ascOrDesc = ref('desc')

  static async requestBookList(thirdCtgyId:number,sortField:string='originalprice',ascOrDesc:string='asc'){
    if (sortField === 'price') sortField = 'originalprice'
    await BookService.bookStore.getBooksByThirdCtgyId(thirdCtgyId,sortField,ascOrDesc)
  }
  static async requestFullBookList(secondctgyId:number,sortField:string='originalprice',ascOrDesc:string='asc'){
    if (sortField === 'price') sortField = 'originalprice'
    await BookService.bookStore.getBooksBySecCtgyId(secondctgyId,sortField,ascOrDesc)
  }
  static changeBread(thrdctgy:ThirdCtgy) {
    CtgyService.ctgyStore.setCurrentThrdCtgy(thrdctgy)
    const {getCurrentThrdCtgy} = CtgyService.ctgyStore
    BookService.requestBookList(getCurrentThrdCtgy.thirdctgyId)
  }
  static sortBook(_sortField:string){
    BookService.sortField.value = _sortField;
    if (_sortField === 'price') BookService.isReadyAsc.value = !BookService.isReadyAsc.value
    BookService.ascOrDesc.value = BookService.ascOrDesc.value === 'desc' ? 'asc' : 'desc'
    const {getCurrentThrdCtgy,getCurrentSecondCtgy} = CtgyService.ctgyStore
    if (getCurrentThrdCtgy.thirdctgyId === 10086){
      BookService.requestFullBookList(getCurrentSecondCtgy.secondctgyId,BookService.sortField.value,BookService.ascOrDesc.value)
    }else {
      BookService.requestBookList(getCurrentThrdCtgy.thirdctgyId,BookService.sortField.value,BookService.ascOrDesc.value)
    }
  }
}
