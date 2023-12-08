import request from '@/utils/axiosUtil'
class BookApi{
  static api:BookApi = new  BookApi()
  getBooksByThirdCtgyId(thirdCtgyId:number,sortField:string,ascOrDesc:string) {
    return request.get(`/booksmodule/findBooksByThirdCtgyId/${thirdCtgyId}/${sortField}/${ascOrDesc}`, false);
  }
  getBooksBySecCtgyId(secondctgyId:number,sortField:string,ascOrDesc:string) {
    return request.get(`/booksmodule/findBooksBySecCtgyId/${secondctgyId}/${sortField}/${ascOrDesc}`, false);
  }
  findBookByISBN(isbn:string){
    return request.get(`/booksmodule/findBookByISBN/${isbn}`, false);
  }
}

export default BookApi.api
