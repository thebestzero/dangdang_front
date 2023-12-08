export interface BookItem {
  ISBN:string;
  bookname:string;
  author:string;
  publishid:number;
  publishername:string;
  monthsalecount:number;
  bookpicname:string;
  secondctgyId:number;
  thirdctgyId:number;
  originalprice:number;
  discount:number;
  purcharsenum: number
}

export interface BookState {
  bookList:BookItem[],
  bookDetail:BookItem,
  isbn:string
}
