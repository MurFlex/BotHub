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
		showText(state) {
			state.isSidebarHidden = false
		},
		hideText(state) {
			state.isSidebarHidden = true
		},
	},
})

export const { toggleSidebar, showText, hideText } = uiSlice.actions

export default uiSlice.reducer
