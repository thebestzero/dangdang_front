import store from '@/vueXstore'

const ctgyGettersTarget = {
  getFirstCtgyList:[],
  getSecondCtgyLst:[],
}

const ctgyGettersProxy = new Proxy(ctgyGettersTarget,{
  get(targetctgyGettersTarget,key) {
    if (key === 'getFirstCtgyList'){
      return store.getters['ctgyModule/getFirstCtgyList']
    }else if (key === 'getSecondCtgyLst'){
      return store.getters['ctgyModule/getSecondCtgyLst']
    }
  }
})

export {ctgyGettersProxy}
