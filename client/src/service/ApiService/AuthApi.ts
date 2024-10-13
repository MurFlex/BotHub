import ApiRequest from '../../configs/ApiRequest'

class AuthApi {
	public async login() {
		// временный пока нет страницы авторизации
		return await ApiRequest.get('auth/getAccessToken')
	}
}

export default new AuthApi()