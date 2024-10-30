import ApiRequest from '../../configs/ApiRequest.ts'

interface User {
    id: number
    email: string
    name: string
}

class AuthApi {
    public async getUserData(): Promise<User> {
        return (await ApiRequest.get('cabinet/user')).data
    }
}

export default new AuthApi()