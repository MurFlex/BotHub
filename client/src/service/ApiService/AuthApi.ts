class AuthApi {
	public async login() {
		return { accessToken: 'test' }
	}
}

export default new AuthApi()
