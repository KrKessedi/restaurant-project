import axios from 'axios'
import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerFailure,
	registerStart,
	registerSuccess,
	setLogout,
} from './userSlice'

const BASE_URL = 'https://macarons.pythonanywhere.com/'

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicReq.post(`accounts/login/`, user)
		// let currentUser =
		dispatch(loginSuccess({ ...res.data, ...user }))
	} catch (err) {
		dispatch(loginFailure)
	}
}

export const register = async (dispatch, user) => {
	dispatch(registerStart())
	console.log(user)
	try {
		const res = await publicReq.post(`accounts/register/`, user)
		dispatch(registerSuccess(user))
	} catch (err) {
		console.log(err)
		dispatch(registerFailure())
	}
}

export const logout = async (dispatch) => {
	dispatch(setLogout())
}
