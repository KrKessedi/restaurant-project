import { createSlice } from '@reduxjs/toolkit'

export const dishSlice = createSlice({
	name: 'dish',
	initialState: {
		dishes: [],
		dishesInLocalStorage: [],
		categories: [],
		oneDish: null,
		genre: '',
		isFetching: false,
		error: false,
	},

	reducers: {
		// localStorage

		getDishInLocalStorageStart: state => {
			state.isFetching = true
			state.error = false
		},

		getDishInLocalStorageSuccess: (state, action) => {
			state.isFetching = true
			state.dishesInLocalStorage = action.payload
			state.error = false
		},

		getDishInLocalStorageFailure: state => {
			state.isFetching = false
			state.error = true
		},

		deleteDishInLocalStorageStart: state => {
			state.isFetching = true
			state.error = false
		},

		deleteDishInLocalStorageSuccess: (state, action) => {
			state.isFetching = false
			state.dishesInLocalStorage.splice(
				state.dishesInLocalStorage.findIndex(
					item => item.id === action.payload
				),
				1
			)
			state.error = false
		},

		deleteDishInLocalStorageFailure: state => {
			state.isFetching = false
			state.error = true
		},

		updateDishInLocalStorageStart: state => {
			state.isFetching = true
			state.error = false
		},

		updateDishInLocalStorageSuccess: (state, action) => {
			state.isFetching = false
			state.dishesInLocalStorage[
				state.dishesInLocalStorage.findIndex(
					item => item.id === action.payload.id
				)
			] = action.payload.Dish
			state.error = false
		},

		updateDishInLocalStorageFailure: state => {
			state.isFetching = false
			state.error = true
		},

		// localStorage

		getDishStart: state => {
			state.isFetching = true
			state.error = false
		},
		getDishSuccess: (state, action) => {
			state.isFetching = true
			state.dishes = action.payload
			state.error = false
		},
		getDishFailure: state => {
			state.isFetching = false
			state.error = true
		},
		deleteDishStart: state => {
			state.isFetching = true
			state.error = false
		},
		deleteDishSuccess: (state, action) => {
			state.isFetching = false
			state.dishes.splice(
				state.dishes.findIndex(item => item.id === action.payload),
				1
			)
			state.error = false
		},
		deleteDishFailure: state => {
			state.isFetching = false
			state.error = true
		},
		updateDishStart: state => {
			state.isFetching = true
			state.error = false
		},
		updateDishSuccess: (state, action) => {
			state.isFetching = false
			state.dishes[
				state.dishes.findIndex(item => item.id === action.payload.id)
			] = action.payload.Dish
			state.error = false
		},
		updateDishFailure: state => {
			state.isFetching = false
			state.error = true
		},
		addDishStart: state => {
			state.isFetching = true
			state.error = false
		},
		addDishSuccess: (state, action) => {
			state.isFetching = false
			state.dishes.push(action.payload)
			state.error = false
		},
		addDishFailure: state => {
			state.isFetching = false
			state.error = true
		},

		getOneDishStart: state => {
			state.isFetching = true
			state.error = false
		},
		getOneDishSuccess: (state, action) => {
			state.isFetching = true
			state.oneDish = action.payload
			state.error = false
		},
		getOneDishFailure: state => {
			state.isFetching = false
			state.error = true
		},

		// categories

		getCategriesStart: state => {
			state.isFetching = true
			state.error = false
		},
		getCategriesSuccess: (state, action) => {
			state.isFetching = true
			state.categories = action.payload
			state.error = false
		},
		getCategriesFailure: state => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const {
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
	getOneDishStart,
	getOneDishSuccess,
	getOneDishFailure,
} = dishSlice.actions
export default dishSlice.reducer
