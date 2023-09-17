import CtgyApi from '@/api/CtgyApi'
import {FirstCtgy,SecondCtgy,ThirdCtgy,CtgyState,initCtgyState} from './state'
import {AxiosResponse} from 'axios'
import { defineStore } from 'pinia'


export const useCtgyStore = defineStore('ctgyModule',{
  state:():CtgyState=>{
    return {
      firstCtgyList:[],
      secondCtgyList:[]
    }
  },
  getters:{
    getFirstCtgyList(state){
      return state.firstCtgyList
    },
    getSecondCtgyLst(state){
      return state.secondCtgyList
    }
  },
  actions:{
    async findFirstCtgyList(){
      const res = await CtgyApi.getFirstCtgyList()
      this.firstCtgyList = res.data
    },
    async findSecThrdCtgyList(firstCtgyId:number){
      const res:AxiosResponse<SecondCtgy[]> = await CtgyApi.getSecThrdCtgyList(firstCtgyId)
      res.data = res.data.map((item)=>{
        return {...item,subThirdCtgys: item.thirdCtgys.slice(0,5),isReadyOpen:true}
      })
      this.secondCtgyList = res.data
    },
  }
})

