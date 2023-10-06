import request from '@/utils/axiosUtil'
import {ShopCart as ShopCartRaw} from '@/store/shopCart/state'
class ShopCartApi{
  static api:ShopCartApi = new  ShopCartApi()
  getCurUserShopCartList(userid: number) {
    return request.get(`/shopCartmodule/findCurUserShopCartList/${userid}`, false);
  }
  addBookToShopCart(shopCart:ShopCartRaw){
    return request.post('/shopCartmodule/addBookToShopCart', false,shopCart);
  }
  appOrSubtrBookFrmShopCart(shopCart:ShopCartRaw){
    return request.post('/shopCartmodule/appOrSubtrBookFrmShopCart', false,shopCart);
  }
  delBookShopCart(shopCartid:number){
    return request.get(`/shopCartmodule/delBookShopCart/${shopCartid}`, false);
  }
}

export default ShopCartApi.api
