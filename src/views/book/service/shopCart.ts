import { useShopStore } from '@/store/index'
import { storeToRefs } from 'pinia'
import { BookItem } from '@/store/book/state'
import { ShopCart } from '@/store/shopCart/state'
import BookService from '@/views/book/service/index'
import { computed, ref, Ref } from 'vue'
export interface BallType {
  showHidden: boolean
  crrentTarget?: EventTarget
}
export default class ShopCartService {
  static shopStore = useShopStore()
  static shopStoreToRefs = storeToRefs(this.shopStore)
  static ball: Ref<BallType> = ref({ showHidden: false })

  static async requestShopCartList() {
    await ShopCartService.shopStore.findShopCartList()
  }
  static async addBookToShopCart(bookItem: BookItem) {
    const shopCart: ShopCart = {
      userid: 1,
      checked: false,
      bookisbn: bookItem.ISBN,
      bookname: bookItem.bookname,
      bookpicname: bookItem.bookpicname,
      bookprice: bookItem.originalprice * bookItem.discount,
      purcharsenum: 1,
    }
    await ShopCartService.shopStore.addBookToShopCart(shopCart)
    BookService.updateBookNum(1, bookItem.ISBN)
  }
  static uptBookNumWithSCLstNum(bookList: BookItem[]) {
    const shopCartList = ShopCartService.shopStore.getShopCartList
    if (shopCartList) {
      shopCartList.forEach((shopCart) => {
        bookList.forEach((book) => {
          if (shopCart.bookisbn === book.ISBN) {
            book.purcharsenum = shopCart.purcharsenum
          }
        })
      })
    }
  }
  static getExistsShopCartID(book: BookItem) {
    const shopCartList = ShopCartService.shopStoreToRefs.getShopCartList
    const res = shopCartList.value.find((item) => item.bookisbn === book.ISBN)
    return res ? res.shopcartid : res
  }
  static async appOrSubtrBookFrmShoListCart(bookItem: BookItem, event: Event) {
    const curShopcartid = ShopCartService.getExistsShopCartID(bookItem)
    const curTarget = <HTMLBodyElement>event.currentTarget
    const className = curTarget.className
    let purcharsenum = 0
    if (className === 'shopcart-operate-add') {
      purcharsenum = bookItem.purcharsenum + 1
      ShopCartService.drop(event)
    } else if (className === 'shopcart-operate-minus') {
      purcharsenum = bookItem.purcharsenum - 1
    }
    const shopCart: ShopCart = {
      shopcartid: curShopcartid,
      userid: 1,
      checked: false,
      bookisbn: bookItem.ISBN,
      bookname: bookItem.bookname,
      bookpicname: bookItem.bookpicname,
      bookprice: bookItem.originalprice * bookItem.discount,
      purcharsenum: purcharsenum,
    }
    await ShopCartService.shopStore.appOrSubtrBookFrmShopCart(shopCart)
    BookService.updateBookNum(purcharsenum, bookItem.ISBN)
  }
  static async appOrSubtrBookInShoListCart(shopCart: ShopCart, event: Event) {
    const curTarget = <HTMLBodyElement>event.currentTarget
    const className = curTarget.className
    if (className === 'shopcart-operate-add') {
      shopCart.purcharsenum = shopCart.purcharsenum + 1
    } else if (className === 'shopcart-operate-minus') {
      shopCart.purcharsenum = shopCart.purcharsenum - 1
    }
    await ShopCartService.shopStore.appOrSubtrBookFrmShopCart(shopCart)
    BookService.updateBookNum(shopCart.purcharsenum, shopCart.bookisbn)
  }
  static async delBookShopCart(bookItem: BookItem) {
    const curShopcartid = ShopCartService.getExistsShopCartID(bookItem)
    if (!curShopcartid) return
    await ShopCartService.shopStore.delBookShopCart(curShopcartid)
    BookService.updateBookNum(0, bookItem.ISBN)
  }
  static async delBookInShopCart(shopCart: ShopCart) {
    if (!shopCart.shopcartid) return;
    await ShopCartService.shopStore.delBookShopCart(shopCart.shopcartid)
    BookService.updateBookNum(0, shopCart.bookisbn)
  }
  static computeTotal() {
    const totalCount = computed(() => {
      let totoalCount_ = 0
      const shopCartList = ShopCartService.shopStore.getShopCartList
      if (shopCartList && shopCartList.length > 0) {
        shopCartList.forEach((shopCart) => {
          totoalCount_ += shopCart.purcharsenum
        })
      }
      return totoalCount_
    })
    const totalPrice = computed(() => {
      let totalPrice_ = 0
      const shopCartList = ShopCartService.shopStore.getShopCartList
      if (shopCartList && shopCartList.length > 0) {
        shopCartList.forEach((shopCart) => {
          totalPrice_ += shopCart.purcharsenum * shopCart.bookprice
        })
      }
      return totalPrice_
    })
    return { totalCount, totalPrice }
  }

  static drop(event: Event) {
    ShopCartService.ball.value.crrentTarget = event.currentTarget!
    ShopCartService.ball.value.showHidden = true
  }
  static beforeBall(el: Element) {
    // document.body.scrollHeight
    const curEl = <HTMLBodyElement>el
    const addBtn = <HTMLBodyElement>ShopCartService.ball.value.crrentTarget
    const addBtnRect = addBtn.getBoundingClientRect()
    const x = addBtnRect.left - 35
    const y = -(window.innerHeight - addBtnRect.top - 22)
    const inner = curEl.getElementsByClassName('inner')[0] as HTMLBodyElement
    curEl.style.transform = `translate3d(0, ${y}px, 0)`
    inner.style.transform = `translate3d(${x}px, 0, 0)`
  }
  static balling(el: Element, done: (...args: any) => any) {
    document.body.scrollHeight // 重绘 dom nextTick
    const curEl = <HTMLBodyElement>el
    const inner = curEl.getElementsByClassName('inner')[0] as HTMLBodyElement
    curEl.style.transform = 'translate3d(0, 0, 0)'
    inner.style.transform = 'translate3d(0, 0, 0)'
    done()
  }
  static afterBall() {
    ShopCartService.ball.value.showHidden = false
    ShopCartService.ball.value.crrentTarget = undefined
  }
}
