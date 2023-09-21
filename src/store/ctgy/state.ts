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
  currentFirstCtgy: FirstCtgy;
  currentSecondCtgy:SecondCtgy;
  currentThrdCtgy:ThirdCtgy;
  currentThirdCtgysList:ThirdCtgy[];
  currentSubThirdCtgysList:ThirdCtgy[];
  isReadyOpen:boolean
}

export const initCtgyState:CtgyState = {
  firstCtgyList:[],
  secondCtgyList:[],
  currentFirstCtgy: {} as FirstCtgy,
  currentSecondCtgy:{} as SecondCtgy,
  currentThrdCtgy:{} as ThirdCtgy,
  currentThirdCtgysList:[],
  currentSubThirdCtgysList:[],
  isReadyOpen:false
}
