import ApiRequest from '@/configs/ApiRequest'

class AuthApi {
    public async login(email: string, password: string) {
        return await ApiRequest.post('auth/login', {
            email,
            password
        })
    }

    public async register(email: string, password: string) {
        return await ApiRequest.post('auth/register', {
            email,
            password
        })
    }

    public async checkEmail(email: string) {
        return await ApiRequest.get('auth/check-email', {
            params: {
                email
            }
        })
    }

    public async refreshToken() {
        return await ApiRequest.get('auth/refresh-token')
    }
}

export default new AuthApi()
