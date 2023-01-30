import axios from 'axios'
import {
	getTableFailure,
	getTableStart,
	getTableSuccess,
	tableFailure,
	tableStart,
	tableSuccess,
} from './tableSlice'
import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerFailure,
	registerStart,
	registerSuccess,
} from './userSlice'
import { toast } from 'react-toastify'

const BASE_URL = 'https://macarons.pythonanywhere.com/'

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicReq.post(`accounts/login/`, user)
		dispatch(loginSuccess(res.data))
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

export const getTable = async dispatch => {
	dispatch(getTableStart())
	try {
		const res = await publicReq.get('table/list/')
		dispatch(getTableSuccess(res.data))
	} catch (err) {
		dispatch(getTableFailure())
	}
}

export const reserveTable = async (dispatch, data) => {
	dispatch(tableStart())
	const reserve = toast.loading('Пожалуйста подождите!!!')
	try {
		const res = await publicReq.put(`table/buy/${data.number}/`, data)
		dispatch(tableSuccess(res.data))
		toast.update(reserve, {
			render: 'Ваша заявка принята, ждите звонка менеджера.',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		dispatch(tableFailure())
		toast.update(reserve, {
			render: 'Что-то пошло не так или стол не свободен',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
	}
}

export const getDishes = async (dispatch, user) => {}
