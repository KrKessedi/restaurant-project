import { createSlice } from '@reduxjs/toolkit'

export const dishSlice = createSlice({
	name: 'dish',
	initialState: {
		dishes: [],
		cart: [],
		oneDish: null,
		currentDish: 'завтраки',
		detailDish: null,
		isFetching: false,
		error: false,
	},

	reducers: {
		// localStorage

		deleteDishInLocalStorageStart: state => {
			state.isFetching = true
			state.error = false
		},

		deleteDishInLocalStorageSuccess: (state, action) => {
			state.isFetching = false
			state.cart.splice(
				state.cart.findIndex(item => item.title === action.payload),
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
			state.cart[
				state.cart.findIndex(item => item.title === action.payload.title)
			] = action.payload.Dish
			state.error = false
		},

		updateDishInLocalStorageFailure: state => {
			state.isFetching = false
			state.error = true
		},

		addDishInLocalStorageSuccess: (state, action) => {
			state.isFetching = false
			state.cart.push(action.payload)
			state.error = false
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
				state.dishes.findIndex(item => item.title === action.payload),
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
				state.dishes.findIndex(item => item.title === action.payload.title)
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
		getDetailDishStart: state => {
			state.isFetching = true
			state.error = false
		},
		getDetailDishSuccess: (state, action) => {
			state.isFetching = true
			state.detailDish = action.payload
			state.error = false
		},
		getDetailDishFailure: state => {
			state.isFetching = false
			state.error = true
		},
		changeCurrentDish: (state, action) => {
			state.currentDish = action.payload
		},
	},
})

export const {
	addDishInLocalStorageStart,
	addDishInLocalStorageSuccess,
	addDishInLocalStorageFailure,
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
	getOneDishStart,
	getOneDishSuccess,
	getOneDishFailure,
	getDetailDishStart,
	getDetailDishSuccess,
	getDetailDishFailure,
	changeCurrentDish,
} = dishSlice.actions
export default dishSlice.reducer
