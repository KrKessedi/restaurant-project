import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
	},

	reducers: {
		register(state, actions) {},
		login(state, actions) {},
		logout(state, actions) {},
		passwordRecovery(state, actions) {},
	},
})

export const { register, login, logout, passwordRecovery } = userSlice.actions

export default userSlice.reducer
