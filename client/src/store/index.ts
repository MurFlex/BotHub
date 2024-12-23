import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import uiReducer from './ui/uiSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
