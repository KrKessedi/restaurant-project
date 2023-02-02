import { useSelector } from 'react-redux'
import React, { createContext, useContext, useReducer } from 'react'

export const calcSubPrice = dish => +dish.count * dish.item.price

const calcTotalPrice = dishes => {
	return dishes.reduce((prev, cur) => {
		return (prev += cur.subPrice)
	}, 0)
}

export const getBasket = () => {
	const { basket } = useSelector(state => state.dishes)

	if (!basket) {
		localStorage.setItem(
			'basket',
			JSON.stringify({
				dishes: [],
				totalPrice: 0,
			})
		)
		basket = {
			dishes: [],
			totalPrice: 0,
		}
	}
	state.basket = action.payload
}

export const addPostToBasket = dish => {
	const { basket } = useSelector(state => state.dishes)
	console.log(basket)

	if (!basket) {
		basket = {
			dishes: [],
			totalPrice: 0,
		}
	}

	let newPost = {
		item: dish,
		count: 1,
		subPrice: +dish.price,
	}

	let dishToFind = basket.dishes.filter(elem => elem.item.title === dish.title)

	if (dishToFind.length === 0) {
		basket.dishes.push(newPost)
	} else {
		basket.dish = basket.dishes.filter(elem => elem.item.title !== dish.title)
	}

	basket.totalPrice = calcTotalPrice(basket.dishes)
}

export function changePostCount(count, title) {
	const { basket } = useSelector(state => state.dishes)

	basket.dishes = basket.dishes.map(dish => {
		if (dish.item.title === title) {
			dish.count = count

			dish.subPrice = calcSubPrice(dish)
		}
		return dish
	})

	basket.totalPrice = calcTotalPrice(basket.dishes)

	localStorage.setItem('basket', JSON.stringify(basket))
}

export function deletePostInBasket(title) {
	const { basket } = useSelector(state => state.dishes)

	basket.dishes = basket.dishes.filter(elem => elem.item.title !== title)

	basket.totalPrice = calcTotalPrice(basket.dishes)

	localStorage.setItem('basket', JSON.stringify(basket))

	getBasket()
}
