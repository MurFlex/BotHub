import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiService from '../../service/ApiService/ApiService'
import { login, logout } from './authSlice'

export const refreshTokenThunk = createAsyncThunk(
	'auth/refreshToken',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const response = await ApiService.auth.refreshToken()
			const { accessToken } = response.data

			localStorage.setItem('accessToken', accessToken)

			dispatch(login(accessToken))

			return accessToken
		} catch (error) {
			console.error('Failed to refresh token:', error)

			dispatch(logout())
			return rejectWithValue('Failed to refresh token')
		}
	}
)

export const fetchUserDataThunk = createAsyncThunk(
	'auth/fetchUserData',
	async (_, { rejectWithValue }) => {
		try {
			return await ApiService.user.getUserData()
		} catch (error) {
			console.error(error)

			return rejectWithValue('Failed to fetch user data')
		}
	}
)