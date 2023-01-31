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

import {
	getDishInLocalStorageStart,
	getDishInLocalStorageSuccess,
	getDishInLocalStorageFailure,
	deleteDishInLocalStorageStart,
	deleteDishInLocalStorageSuccess,
	deleteDishInLocalStorageFailure,
	updateDishInLocalStorageStart,
	updateDishInLocalStorageSuccess,
	updateDishInLocalStorageFailure,
	getDishStart,
	getDishSuccess,
	getDishFailure,
	deleteDishFailure,
	deleteDishSuccess,
	deleteDishStart,
	updateDishFailure,
	updateDishSuccess,
	updateDishStart,
	addDishFailure,
	addDishSuccess,
	addDishStart,
	getCategriesStart,
	getCategriesSuccess,
	getCategriesFailure,
} from './dishSlice'

import { toast } from 'react-toastify'

const BASE_URL = 'https://macarons.pythonanywhere.com/'

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

// const token = JSON.parse(localStorage.getItem('token'))
// const Authorization = `JWT ${token.access}`
// const config = {
// 	headers: {
// 		Authorization,
// 	},
// }

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

export const getCategories = async dispatch => {
	// dispatch(getCategriesStart())
	try {
		// const { data } = await publicReq.get(`product/category-list/`, config)
		// dispatch(getCategriesSuccess(data))
		// console.log(data)
	} catch (err) {
		// dispatch(getCategriesFailure())
		console.log(err)
	}
}
