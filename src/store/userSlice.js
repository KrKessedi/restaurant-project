import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
		code: null,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		loginFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		registerStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		registerSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		registerFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		setLogout: (state) => {
			state.currentUser = null
		},
		forgotPasswordStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		forgotPasswordSuccess: (state, action) => {
			state.isFetching = false
			state.error = false
		},
		forgotPasswordFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		restorePasswordStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		restorePasswordSuccess: (state, action) => {
			state.isFetching = false
			state.code = action.payload
			state.error = false
		},
		restorePasswordFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	registerStart,
	registerSuccess,
	registerFailure,
	setLogout,
	forgotPasswordStart,
	forgotPasswordSuccess,
	forgotPasswordFailure,
	restorePasswordStart,
	restorePasswordSuccess,
	restorePasswordFailure,
} = userSlice.actions

export default userSlice.reducer
