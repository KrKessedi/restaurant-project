import React from 'react'
import '../styles/HomePage.css'
import dish from '../images/dish.png'
import bgEllips from '../images/Ellipse 1.svg'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PopularDishes from '../components/PopularDishes'
import DishCategories from '../components/DishCategories'
import AboutUs from '../components/AboutUs'

const HomePage = () => {
	return (
		<div className='home-container pb-14'>
			<motion.img
				className='home-top-bg'
				initial={{ translateY: '-50%' }}
				animate={{ translateY: 0 }}
				transition={{ duration: 0.5, delay: 0 }}
				src={bgEllips}
				alt=''
			/>
			<Navbar />
			<header className='header'>
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
					className='header__dish-image'
					src={dish}
					alt=''
				/>
			</header>
			<div className='navigate-block mb-20'>
				<button className='navigate-btn py-2 px-8'>Меню</button>
				<button className='navigate-btn py-2 px-8'>Забронировать стол</button>
			</div>
			<PopularDishes />
			<DishCategories />
			<AboutUs />
			<Footer />
		</div>
	)
}

export default HomePage
