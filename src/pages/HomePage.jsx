import React from 'react'
import '../styles/HomePage.css'
import dish from '../images/dish.png'
import logo from '../images/logo.svg'
import bgEllips from '../images/Ellipse 1.svg'
import { motion, useScroll } from 'framer-motion'

const HomePage = () => {
	const { scrollYProgress } = useScroll()
	return (
		<div className='home-container'>
			<motion.img
				className='home-top-bg'
				initial={{ translateY: '-50%' }}
				animate={{ translateY: 0 }}
				transition={{ duration: 0.5, delay: 0 }}
				src={bgEllips}
				alt=''
			/>
			<nav>
				<div className='logo-block'>
					<h3 className='logo'>M</h3>
				</div>
				<ul className='nav__navigate-list'>
					<li>Главная</li>
					<li>О нас </li>
					<li>Меню</li>
					<li>О доставке </li>
					<li>Контакты </li>
				</ul>
				<motion.button
					whileHover={{ scale: 1.08, translateY: -3, scaleY: 1.1 }}
					transition={{ duration: 0.2 }}
					className='login-navigate-btn'
				>
					Вход
				</motion.button>
			</nav>
			<header>
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
				<div className='header__navigate-block'>
					<button>Меню</button>
					<button>Заказать </button>
					<button>Забронировать стол</button>
				</div>
			</header>
		</div>
	)
}

export default HomePage
