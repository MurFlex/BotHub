import ApiRequest from '@/configs/ApiRequest.ts'

import { User } from './types'

class AuthApi {
    public async getUserData(): Promise<User> {
        return (await ApiRequest.get('cabinet/user')).data
    }
}

export default new AuthApi()