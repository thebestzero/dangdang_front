import goodStorage from 'good-storage'


type EleOfArr<T> = T extends Array<infer E> ? E : never

const isPlainObject = (val:unknown):val is object => Object.prototype.toString.call(val) === '[object Object]'

function getValArrOfObj<T extends any[], K extends keyof EleOfArr<T>,E = EleOfArr<T>>(arr:T,key:K){
  return arr.map(({[key]:v}:E) => v,{})
}

export enum OPTION {
  ACCUMU = 0, // 数组累加
  ADDAPPENDOBJTOARR = 2, // 把对象添加或追加到时数组里面
  NONE = -1, // 什么都不加
}

class Storage{
  static storage: Storage = new Storage()

  set(key:string,value:string):any
  set(key:string,value:object):any
  set(key:string,value:any[]):any
  set(key:string,value:any[],option:OPTION):any
  set(key:string,value:object,option:OPTION):any
  set(key: string, value: object, options: OPTION, propkey: string, propvalue: any):any
  set(key: string, value: object | any[] | string, options: OPTION = OPTION.NONE, propkey: string = '', propvalue?: any){
    if (Array.isArray(value) && options === OPTION.ACCUMU){
      const arr = goodStorage.get(key,[])
      arr.push(...value)
      goodStorage.set(key,arr)
      return arr
    }else if (isPlainObject(value) && options === OPTION.ADDAPPENDOBJTOARR){
      const arr:any[] = goodStorage.get(key,[])
      const keyValsOfObj = getValArrOfObj(arr, propkey as keyof EleOfArr<typeof arr>)// 此处propkey与getValArrOfObj函数类型不符如何解决
      if (propkey.length > 0 && propvalue) {
        if (!keyValsOfObj.includes(propvalue)) {
          arr.push(value)
        } else {
          const index = keyValsOfObj.indexOf(propvalue)
          console.log(index)
          if (index !== -1) arr[index] = value
        }
        goodStorage.set(key, arr)
        return arr
      }
    }else {
      goodStorage.set(key, value)
    }
  }

  get(key: string): any
  get(key: string, options: OPTION): any
  get(key: string, options: OPTION = OPTION.NONE) {
    if (key.length) {
      if (options === OPTION.ACCUMU || options === OPTION.ADDAPPENDOBJTOARR) return goodStorage.get(key, [])
      else return goodStorage.get(key)
    }
  }

  remove(key:string):any
  remove(key: string, options: OPTION, propkey: string, propvalue: any): any
  remove(key: string, options: OPTION = OPTION.NONE, propkey: string = '', propvalue?: any){
    if (options === OPTION.ADDAPPENDOBJTOARR){
      const arr:any[] = goodStorage.get(key,[])
      const keyValArrOfObj = getValArrOfObj(arr,propkey)
      const eleIndex = keyValArrOfObj.indexOf(propvalue)
      if (eleIndex > -1){
        arr.splice(eleIndex,1)
        goodStorage.set(key,arr)
      }
    }
  }

}
export default Storage.storage
