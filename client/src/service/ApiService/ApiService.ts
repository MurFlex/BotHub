import AuthApi from './AuthApi'
import UserApi from './UserApi.ts'

class ApiService {
    public auth: typeof AuthApi
    public user: typeof UserApi

    constructor() {
        this.auth = AuthApi
        this.user = UserApi
    }
}

export default new ApiService()
