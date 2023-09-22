import CtgyApi from '@/api/CtgyApi'
import {
  FirstCtgy,
  SecondCtgy,
  ThirdCtgy,
  CtgyState,
  initCtgyState,
} from './state'
import { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import goodStorage from 'good-storage'
import _ from 'lodash'
export const useCtgyStore = defineStore('ctgyModule', {
  state: (): CtgyState => {
    return {
      firstCtgyList: [],
      secondCtgyList: [],
      currentFirstCtgy: {} as FirstCtgy,
      currentSecondCtgy: {} as SecondCtgy,
      currentThrdCtgy: {} as ThirdCtgy,
      currentThirdCtgysList: [],
      currentSubThirdCtgysList: [],
      isReadyOpen: true,
    }
  },
  getters: {
    getFirstCtgyList(state) {
      return state.firstCtgyList
    },
    getSecondCtgyLst(state) {
      return state.secondCtgyList
    },
    getCurrentFirstCtgy(state): FirstCtgy {
      return _.isEmpty(state.currentFirstCtgy)
        ? goodStorage.get('currentFirstCtgy')
        : state.currentFirstCtgy
    },
    getCurrentSecondCtgy(state): SecondCtgy {
      return _.isEmpty(state.currentSecondCtgy)
        ? goodStorage.get('currentSecondCtgy')
        : state.currentSecondCtgy
    },
    getCurrentThrdCtgy(state): ThirdCtgy {
      return _.isEmpty(state.currentThrdCtgy)
        ? goodStorage.get('currentThrdCtgy')
        : state.currentThrdCtgy
    },
    getCurrentThirdCtgysList(state): ThirdCtgy[] {
      return _.isEmpty(state.currentThirdCtgysList)
        ? goodStorage.get('currentThirdCtgysList')
        : state.currentThirdCtgysList
    },
    getCurrentSubThirdCtgysList(state): ThirdCtgy[] {
      return _.isEmpty(state.currentSubThirdCtgysList)
        ? goodStorage.get('currentSubThirdCtgysList')
        : state.currentSubThirdCtgysList
    },
    getIsReadyOpen(state): boolean {
      return state.isReadyOpen
    },
  },
  actions: {
    async findFirstCtgyList() {
      const res = await CtgyApi.getFirstCtgyList()
      this.firstCtgyList = res.data
    },
    async findSecThrdCtgyList(firstCtgyId: number) {
      const res: AxiosResponse<SecondCtgy[]> =
        await CtgyApi.getSecThrdCtgyList(firstCtgyId)
      res.data = res.data.map((item) => {
        return {
          ...item,
          subThirdCtgys: item.thirdCtgys.slice(0, 5),
          isReadyOpen: true,
        }
      })
      this.secondCtgyList = res.data
    },
    setCurrentFirstCtgy(firstCtgy: FirstCtgy) {
      this.currentFirstCtgy = firstCtgy
      goodStorage.set('currentFirstCtgy', firstCtgy)
    },
    setCurrentSecondCtgy(secondCtgy: SecondCtgy) {
      this.currentSecondCtgy = secondCtgy
      goodStorage.set('currentSecondCtgy', secondCtgy)
    },
    setCurrentThrdCtgy(thirdCtgy: ThirdCtgy) {
      this.currentThrdCtgy = thirdCtgy
      goodStorage.set('currentThrdCtgy', thirdCtgy)
    },
    setCurrentThirdCtgysList(thirdCtgys: ThirdCtgy[]) {
      // const index = thirdCtgys.findIndex(
      //   (item) => item.thirdctgyId === this.currentThrdCtgy.thirdctgyId,
      // )
      // if (index > -1) {
      //   const removed = thirdCtgys.splice(index, 1)
      //   thirdCtgys.push(removed[0])
      // }
      this.currentThirdCtgysList = thirdCtgys
      goodStorage.set('currentThirdCtgysList', thirdCtgys)
    },
    setCurrentSubThirdCtgysList(thirdCtgys: ThirdCtgy[]) {
      // const index = thirdCtgys.findIndex(
      //   (item) => item.thirdctgyId === this.currentThrdCtgy.thirdctgyId,
      // )
      // if (index > -1) {
      //   const removed = thirdCtgys.splice(index, 1)
      //   thirdCtgys.push(removed[0])
      // }
      this.currentSubThirdCtgysList = thirdCtgys
      goodStorage.set('currentSubThirdCtgysList', thirdCtgys)
    },
    setIsReadyOpen(isReadyOpen: boolean) {
      console.log(isReadyOpen)
      this.isReadyOpen = isReadyOpen
    },
  },
})
