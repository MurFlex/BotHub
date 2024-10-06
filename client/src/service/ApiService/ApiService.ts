import AuthApi from './AuthApi'

class ApiService {
	public auth: typeof AuthApi

	constructor() {
		this.auth = AuthApi
	}
}

export default new ApiService()
