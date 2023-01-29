import React from 'react'
// import '../styles/HomePage.css'
// import dish from '../images/dish.png'
// import { motion } from 'framer-motion'
import PopularDishes from '../components/lending/PopularDishes'
import DishCategories from '../components/lending/DishCategories'
import AboutUs from '../components/lending/AboutUs'
import WelcomePage from '../components/lending/WelcomePage'

const HomePage = () => {
	return (
		// <div onClick={() => setBurger(false)}>
		<>
			<WelcomePage />
			<PopularDishes />
			<DishCategories />
			<AboutUs />
			{/* Здесь будет компонент о статистике */}
			{/* Здесь будет компонент о партнерах */}
		</>
	)
}

export default HomePage
