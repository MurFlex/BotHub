import ApiRequest from '../../configs/ApiRequest'

class AuthApi {
	public async login(login: string, password: string) {
		console.log(login)
		console.log(password)
		// временный пока нет страницы авторизации
		return await ApiRequest.get('auth/getAccessToken')
	}
}

export default new AuthApi()
