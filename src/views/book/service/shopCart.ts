import {useShopStore} from '@/store/index'
import {storeToRefs} from 'pinia'
import { BookItem } from '@/store/book/state'
import { ShopCart } from '@/store/shopCart/state'
import BookService from '@/views/book/service/index'

export default class ShopCartService{
  static shopStore = useShopStore()
  static shopStoreToRefs = storeToRefs(this.shopStore)

  static async requestShopCartList(){
    await ShopCartService.shopStore.findShopCartList()
  }
  static async addBookToShopCart(bookItem:BookItem){
    const shopCart:ShopCart = {
      userid: 1,
      checked: false,
      bookisbn: bookItem.ISBN,
      bookname: bookItem.bookname,
      bookpicname: bookItem.bookpicname,
      bookprice: bookItem.originalprice * bookItem.discount,
      purcharsenum: 1
    }
    await ShopCartService.shopStore.addBookToShopCart(shopCart)
    BookService.updateBookNum(1,bookItem.ISBN)
  }
  static uptBookNumWithSCLstNum(bookList: BookItem[]){
    const shopCartList = ShopCartService.shopStore.getShopCartList
    if (shopCartList){
      shopCartList.forEach((shopCart)=>{
        bookList.forEach((book)=>{
          if (shopCart.bookisbn === book.ISBN){
            book.purcharsenum = shopCart.purcharsenum
          }
        })
      })
    }
  }
  static getExistsShopCartID(book:BookItem){
    const shopCartList = ShopCartService.shopStoreToRefs.getShopCartList
    const res = shopCartList.value.find((item)=> item.bookisbn === book.ISBN)
    return res ? res.shopcartid : res
  }
  static async appOrSubtrBookFrmShoListCart(bookItem:BookItem,event:Event){
      const curShopcartid = ShopCartService.getExistsShopCartID(bookItem)
      const curTarget = <HTMLBodyElement>event.currentTarget
      const className = curTarget.className
      let purcharsenum = 0
      if (className === 'shopcart-operate-add'){
        purcharsenum = bookItem.purcharsenum +1
      }else if (className === 'shopcart-operate-minus'){
        purcharsenum = bookItem.purcharsenum - 1
      }
      const shopCart:ShopCart = {
        shopcartid:curShopcartid,
        userid: 1,
        checked: false,
        bookisbn: bookItem.ISBN,
        bookname: bookItem.bookname,
        bookpicname:bookItem.bookpicname,
        bookprice: bookItem.originalprice * bookItem.discount,
        purcharsenum: purcharsenum
      }
      await ShopCartService.shopStore.appOrSubtrBookFrmShopCart(shopCart)
      BookService.updateBookNum(purcharsenum,bookItem.ISBN)
  }
  static async delBookShopCart(bookItem:BookItem){
    const curShopcartid = ShopCartService.getExistsShopCartID(bookItem)
    if (!curShopcartid) return;
    await ShopCartService.shopStore.delBookShopCart(curShopcartid)
    BookService.updateBookNum(0,bookItem.ISBN)
  }
}
