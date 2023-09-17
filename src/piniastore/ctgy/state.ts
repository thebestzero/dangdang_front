export interface FirstCtgy {
  firstCtgyId:number;
  name:string;
}

export interface SecondCtgy {
  secondctgyId:number;
  secctgyname:string;
  thirdCtgys:ThirdCtgy[];
  subThirdCtgys:ThirdCtgy[];
  isReadyOpen:boolean
}

export interface ThirdCtgy {
 thirdctgyId:number;
 thirdname:string;
}

export interface CtgyState{
  firstCtgyList:FirstCtgy[];
  secondCtgyList:SecondCtgy[];
}

export const initCtgyState:CtgyState = {
  firstCtgyList:[],
  secondCtgyList:[]
}
