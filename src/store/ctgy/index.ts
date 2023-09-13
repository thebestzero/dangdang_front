import {Module} from 'vuex'
import storage from 'good-storage'
import CtgyApi from '@/api/CtgyApi'
import {FirstCtgy,SecondCtgy,ThirdCtgy,CtgyState,initCtgyState} from './state'

export const ctgyModule:Module<CtgyState, any> = {
  namespaced:true,
  state:initCtgyState,
  getters:{
    getFirstCtgyList(state){
      return state.firstCtgyList
    },
    getSecondCtgyLst(state){
      return state.secondCtgyList
    }
  },
  mutations:{
    storeFirstCtgyLst(state,firstCtgyList_:FirstCtgy[]){
      state.firstCtgyList = firstCtgyList_
    },
    storeSecondCtgyLst(state,secondCtgyList:SecondCtgy[]){
      state.secondCtgyList = secondCtgyList
    },
  },
  actions:{
    async findFirstCtgyList({commit}){
      const res = await CtgyApi.getFirstCtgyList()
      console.log(res)
      commit('storeFirstCtgyLst',res.data)
    },
    async findSecThrdCtgyList({commit},firstCtgyId:number){
      const res = await CtgyApi.getSecThrdCtgyList(firstCtgyId)
      commit('storeSecondCtgyLst',res.data)
    },
  }
}
