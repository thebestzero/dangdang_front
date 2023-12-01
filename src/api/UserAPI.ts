import {UserInfo} from '@/store/user';
import request from '@/utils/axiosUtil'
class UserApi{
    static api:UserApi = new  UserApi()
    login(userInfo:UserInfo) {
        return request.post('/usermodule/login', false,userInfo);
    }
}

export default UserApi.api