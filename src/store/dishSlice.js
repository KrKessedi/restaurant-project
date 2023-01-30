import { createSlice } from '@reduxjs/toolkit'

export const dishSlice = createSlice({
	name: 'dish',
	initialState: {
		dishes: [],
		genre: '',
		isFetching: false,
		error: false,
	},

	reducers: {
		getDishInLocalStorageStart: state => {
			state.isFetching = true
			state.error = false
		},

		getDishInLocalStorageSuccess: (state, action) => {
			state.isFetching = true
			state.dishes = action.payload
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
			state.dishes.splice(
				state.dishes.findIndex(item => item._id === action.payload),
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
			state.dishes[
				state.dishes.findIndex(item => item._id === action.payload.id)
			] = action.payload.Dish
			state.error = false
		},

		updateDishInLocalStorageFailure: state => {
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
} = dishSlice.actions
export default dishSlice.reducer
