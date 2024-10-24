import { createSlice } from '@reduxjs/toolkit'

interface UIState {
	isSidebarHidden: boolean
}

const initialState: UIState = {
	isSidebarHidden: false,
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleSidebar(state) {
			state.isSidebarHidden = !state.isSidebarHidden
		},
	},
})

export const { toggleSidebar} = uiSlice.actions

export default uiSlice.reducer
