import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { refreshTokenThunk } from './authThunks'

interface User {
	id: number
	email: string
	name: string
}

interface AuthState {
	isAuthenticated: boolean
	accessToken: string | null
	refreshTokenLoading: boolean
	user: User | null
}

const initialState: AuthState = {
	isAuthenticated: false,
	accessToken: null,
	refreshTokenLoading: false,
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<string>) => {
			state.isAuthenticated = true
			state.accessToken = action.payload // TODO: Добавить присвоение юзера с сервера
		},
		logout: state => {
			state.isAuthenticated = false
			state.accessToken = null
		},
	},
	extraReducers: builder => {
		builder
			.addCase(refreshTokenThunk.pending, state => {
				state.refreshTokenLoading = true
			})
			.addCase(
				refreshTokenThunk.fulfilled,
				(state, action: PayloadAction<string>) => {
					state.isAuthenticated = true
					state.accessToken = action.payload
					state.refreshTokenLoading = false
				}
			)
			.addCase(refreshTokenThunk.rejected, state => {
				state.isAuthenticated = false
				state.accessToken = null
				state.user = null
				state.refreshTokenLoading = false
			})
	},
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
