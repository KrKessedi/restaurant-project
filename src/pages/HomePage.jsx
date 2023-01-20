import React from 'react'
import '../styles/HomePage.css'
import dish from '../images/dish.png'
import bgEllips from '../images/Ellipse 1.svg'

import { motion } from 'framer-motion'

const HomePage = () => {
	return (
		<div className='home-container w-full flex flex-col items-center'>
			{/* <motion.div
				className='home-top-bg'
				initial={{ translateY: '-100%' }}
				animate={{ translateY: '-27%' }}
				transition={{ duration: 0.5, delay: 0 }}
			>
				<div></div>
			</motion.div> */}
			<header className='header relative flex flex-col items-center'>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0, duration: 1 }}
					className='home-title'
				>
					МАКАРОННАЯ
				</motion.h1>
				<motion.img
					initial={{ translateY: '0%', scale: 0.4 }}
					animate={{ translateY: 0, scale: 1 }}
					transition={{ delay: 0, duration: 0.6 }}
					className='header__dish-image absolute'
					src={dish}
					alt=''
				/>
			</header>
			<div className='navigate-block mb-20 flex justify-between items-center mx-auto'>
				<button className='navigate-btn py-2 px-8 text-center'>Меню</button>
				<button className='navigate-btn py-2 px-8 text-center'>
					Забронировать стол
				</button>
			</div>
			<PopularDishes />
			<DishCategories />
			<AboutUs />
			{/* Здесь будет компонент о статистике */}
			{/* Здесь будет компонент о партнерах */}
		</div>
	)
}

export default HomePage
