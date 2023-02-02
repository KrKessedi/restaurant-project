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
	setLogout,
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
	addDishInLocalStorageStart,
	addDishInLocalStorageSuccess,
	addDishInLocalStorageFailure,
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
	getOneDishStart,
	getOneDishSuccess,
	getOneDishFailure,
	getDetailDishStart,
	getDetailDishSuccess,
	getDetailDishFailure,
} from './dishSlice'

import { toast } from 'react-toastify'

const BASE_URL = 'https://macarons.pythonanywhere.com/'

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

// const token = JSON.parse(localStorage.getItem('persist:root'))

// const Authorization = `JWT ${token.user.currentUser.access}`
// console.log(typeof token.table)
// const config = {
// 	headers: {
// 		Authorization,
// 	},
// }

// AUTHORIZATION

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	const reserve = toast.loading('Пожалуйста подождите!!!')
	try {
		const res = await publicReq.post(`accounts/login/`, user)
		dispatch(loginSuccess({ ...res.data, ...user }))
		toast.update(reserve, {
			render: 'Вы успешно вошли',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		dispatch(loginFailure())
		toast.update(reserve, {
			render: 'Что-то пошло не так или стол не свободен',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
	}
}

export const register = async (dispatch, user) => {
	dispatch(registerStart())
	const reserve = toast.loading('Пожалуйста подождите!!!')

	console.log(user)
	try {
		const res = await publicReq.post(`accounts/register/`, user)
		dispatch(registerSuccess(user))
	} catch (err) {
		console.log(err)
		dispatch(registerFailure())
	}
}

export const logout = async dispatch => {
	dispatch(setLogout())
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

// TABLE

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

export const getDishes = async dispatch => {
	dispatch(getDishStart())
	try {
		const { data } = await publicReq.get(`product/product-list/`)
		dispatch(getDishSuccess(data))
		// console.log(data)
	} catch (err) {
		dispatch(getDishFailure())
		console.log(err)
	}
}

export const addDish = async (dispatch, data) => {
	dispatch(addDishStart())
	const dish = toast.loading('Пожалуйста подождите!!!')
	try {
		const res = await publicReq.post('product/product-create/', data)
		console.log(res.data)
		dispatch(addDishSuccess(res.data))
		toast.update(dish, {
			render: 'Ваша блюдо добавлена.',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		dispatch(addDishFailure())
		console.log(err)
		toast.update(dish, {
			render: 'Что-то пошло не так',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
	}
}

export const deleteDish = async (dispatch, item, setDetail) => {
	dispatch(deleteDishStart())
	const dish = toast.loading('Пожалуйста подождите!!!')

	try {
		const res = await publicReq.delete(`product/product-delete/${item}/`)
		dispatch(deleteDishSuccess(res.data))
		setDetail('')
		toast.update(dish, {
			render: 'Ваша блюдо удалено.',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		dispatch(deleteDishFailure())
		toast.update(dish, {
			render: 'Что-то пошло не так',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
		console.log(err)
	}
}

export const GetOneDish = async (dispatch, item, setModalFlag) => {
	dispatch(getOneDishStart())
	const dish = toast.loading('Пожалуйста подождите!!!')

	try {
		const res = await publicReq.get(`product/product-update/${item}/`)
		dispatch(getOneDishSuccess(res.data))
		// setTimeout(() => {
		setModalFlag(true)
		// }, 900)
		toast.update(dish, {
			render: 'Ваша блюдо найдено.',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		dispatch(getOneDishFailure())
		toast.update(dish, {
			render: 'Что-то пошло не так',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
		console.log(err)
	}
}

export const getDetailDish = async (dispatch, item, setDetail) => {
	dispatch(getDetailDishStart())

	try {
		const res = await publicReq.get(`product/product-update/${item}/`)
		dispatch(getDetailDishSuccess(res.data))
		setDetail(true)
	} catch (err) {
		dispatch(getDetailDishFailure())
		console.log(err)
	}
}

export const updateDish = async (dispatch, item, newObj, setModalFlag) => {
	dispatch(updateDishStart())
	const dish = toast.loading('Пожалуйста подождите!!!')

	try {
		console.log(item)
		const res = await publicReq.patch(`product/product-update/${item}/`, newObj)
		dispatch(updateDishSuccess(res.data))
		setModalFlag(false)
		toast.update(dish, {
			render: 'Ваша блюдо изменено.',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		dispatch(updateDishFailure())
		toast.update(dish, {
			render: 'Что-то пошло не так',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
		console.log(err)
	}
}

// LOCALSTORAGE

export const addDishInLocalStorage = async (dispatch, data) => {
	dispatch(addDishInLocalStorageStart())
	const dish = toast.loading('Пожалуйста подождите!!!')
	console.log(data)
	try {
		// const res = await publicReq.post('product/product-create/', data)
		// console.log(res.data)
		dispatch(addDishInLocalStorageSuccess(data))
		toast.update(dish, {
			render: 'Ваша блюдо добавлена в корзину.',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		console.log(err)
		dispatch(addDishInLocalStorageFailure())
		toast.update(dish, {
			render: 'Что-то пошло не так',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
	}
}

export const deleteDishInLocalStorage = async (dispatch, item) => {
	dispatch(deleteDishInLocalStorageStart())
	const dish = toast.loading('Пожалуйста подождите!!!')

	try {
		dispatch(deleteDishInLocalStorageSuccess(item))
		toast.update(dish, {
			render: 'Ваша блюдо удалено из корзины.',
			type: 'success',
			isLoading: false,
			autoClose: 2000,
		})
	} catch (err) {
		dispatch(deleteDishInLocalStorageFailure())
		toast.update(dish, {
			render: 'Что-то пошло не так',
			type: 'error',
			isLoading: false,
			autoClose: 3000,
		})
		console.log(err)
	}
}
