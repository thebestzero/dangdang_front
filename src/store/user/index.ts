import { defineStore } from 'pinia'
import { AxiosResponse } from 'axios'
import searchApi from '@/api/SearchApi'
import storage,{OPTION} from '@/utils/goodStorageUtil'
import UserAPI from '@/api/UserAPI';
import _ from 'lodash-es'
export const userStore = defineStore('userStore', {
    state: () => {
        return initeState
    },
    getters: {
        storeLoginUser(state){
            return _.isEmpty(state.userinfo) ? storage.get('token') : state.userinfo
        }
    },
    actions: {
        async login(username:string,password:string){
            const loginUser = {username,password} as UserInfo
            const userinfo:AxiosResponse<UserInfo> = await UserAPI.login(loginUser)
            this.userinfo = userinfo.data
            storage.set('token',userinfo.data.token)
        },
    },
})

export type UserInfo = {
    userid: number
    username: string
    password: string
    address: string
    valid: number
    token:string
}
type initStateType = {
    userinfo:UserInfo
}

const initeState:initStateType = {
    userinfo:{} as UserInfo
}
