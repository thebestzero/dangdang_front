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
  originalprice:string;
  discount:string;
}

export interface BookState {
  bookList:BookItem[]
}
