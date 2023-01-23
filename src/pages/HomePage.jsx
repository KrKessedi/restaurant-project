import React from 'react'
import '../styles/HomePage.css'
import dish from '../images/dish.png'
import { motion } from 'framer-motion'
import PopularDishes from '../components/PopularDishes'
import DishCategories from '../components/DishCategories'
import AboutUs from '../components/AboutUs'
import RegisterModal from '../components/auth/RegisterModal'
import LoginModal from '../components/auth/LoginModal'
import PasswordRecovery from '../components/auth/PasswordRecovery'
import Confirmation from '../components/auth/Confirmation'
import NewPassword from '../components/auth/NewPassword'

const HomePage = () => {
	return (
		<div className='home-container w-full flex flex-col items-center'>
			<header className='h-[689px] relative flex flex-col items-center bg-no-repeat '>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0, duration: 1 }}
					className='home-title cursor-default font-bold text-[13.2vw] leading-[218px] m-x-auto text-white mb-[33%] font-["Times_New_Roman"] '
				>
					МАКАРОННАЯ
				</motion.h1>
				<motion.img
					initial={{ scale: 0.4 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6 }}
					className='absolute top-28'
					src={dish}
					alt=''
				/>
			</header>
			<div className='navigate-block w-[500px] mb-20 pt-10 flex justify-between items-center mx-auto'>
				<button className='navigate-btn'>Меню</button>
				<button className='navigate-btn'>Забронировать стол</button>
			</div>
			<PopularDishes />
			<DishCategories />
			<AboutUs />
			{/* Здесь будет компонент о статистике */}
			{/* Здесь будет компонент о партнерах */}
			<NewPassword />
		</div>
	)
}

export default HomePage
