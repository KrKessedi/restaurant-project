import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import BurgerMenu from './BurgerMenu'
import burgerBtn from '../../../images/burger-btn.svg'
import AuthModal from '../../auth/AuthModal'
import { useSelector } from 'react-redux'
import avatar from '../../../images/user-avatar-svgrepo-com.svg'

const Navbar = ({ burger, setBurger, modalFlag, setModalFlag }) => {
	// const [burger, setBurger] = useState(false)
	// export setBurger
	// const [modalFlag, setModalFlag] = useState(false)
	const [userMenu, setUserMenu] = useState(false)
	const navigate = useNavigate()
	const user = useSelector((state) => state.user.currentUser)

	return (
		<>
			{modalFlag ? <AuthModal setModalFlag={setModalFlag} /> : null}
			<header className='sticky backdrop-blur shadow-xl rounded-bl-2xl rounded-br-2xl top-0 px-20 xl:px-16 lg:px-6 w-full flex flex-col sm:flex-row-reverse sm:justify-between items-center justify-center z-1'>
				<img
					onClick={() => setBurger(!burger)}
					className='hidden sm:block w-8 hover:-translate-y-[3px] hover:duration-200 duration-200 active:translate-y-1 '
					src={burgerBtn}
					alt=''
				/>
				{/* <BurgerMenu setBurger={setBurger} burger={burger} /> */}
				<nav className='w-full sm:w-[56%] flex items-center justify-between md:px-10 sm:px-0'>
					<div
						onClick={() => navigate('/')}
						className='logo-block flex items-center justify-center cursor-pointer w-[90px] h-[89px] '
					>
						<h3 className='logo font-times text-[32px] text-white md:h-12 '>
							M
						</h3>
					</div>
					<div className='md:hidden flex items-center justify-around w-[80%]'>
						<ul className='w-[750px] lg:w-[690px] md:w-[670px] flex justify-between items-end'>
							<li>
								<a href='#home'>Главная</a>
							</li>
							<li className='disc'>•</li>
							<li>
								<a href='#about-us'>О нас</a>
							</li>
							<li className='disc'>•</li>
							<li>
								<a href='#menu'>Меню</a>
							</li>
							<li className='disc'>•</li>
							<li>
								<a href='#reserved'>Забронировать стол </a>
							</li>
							<li className='disc'>•</li>
							<li>
								<a href='#contacts'>Контакты</a>
							</li>
						</ul>
					</div>
					<div className='sm:hidden space-x-8 flex justify-between items-center'>
						<motion.button
							whileHover={{ translateY: '-2px' }}
							className='basket-navigate-btn w-7 h-6'
						></motion.button>
						{!user ? (
							<button
								className='login-navigate-btn h-11 bg-my-orange rounded-[30px] px-9 text-white font-semibold'
								onClick={() => setModalFlag(true)}
							>
								Вход
							</button>
						) : (
							<div>
								<div className='w-[40px]'>
									<img
										className='cursor-pointer'
										src={avatar}
										alt='avatar'
										onClick={() => {
											setUserMenu(true)
										}}
									/>
								</div>
								<div
									onClick={() => {
										setUserMenu(false)
									}}
									className='burger-menu flex justify-end items-start absolute top-0 left-0 w-full min-h-[100vh] -z-2'
								>
									<div
										onClick={(e) => e.stopPropagation()}
										style={
											userMenu
												? { transform: 'translateX(0)', transition: '.5s' }
												: { transform: 'translateX(400px)', transition: '.5s' }
										}
										className='w-[275px]  bg-white px-5 py-9 rounded-2xl shadow-[0_0_15px_white_,_inset_0_0_10px_rgb(0,0,0,.4)] mt-9 mr-9 flex flex-col absolute right-0 top-9'
									></div>
								</div>
							</div>
						)}
					</div>
				</nav>
				<ul className=' hidden w-[70%] sm:hidden md:flex justify-between items-end md:items-center pb-5'>
					<li>
						<a href='#home'>Главная</a>
					</li>
					<li className='disc'>•</li>
					<li>
						<a href='#about-us'>О нас</a>
					</li>
					<li className='disc'>•</li>
					<li>
						<a href='#menu'>Меню</a>
					</li>
					<li className='disc'>•</li>
					<li>
						<a href='#reserved'>Забронировать стол </a>
					</li>
					<li className='disc'>•</li>
					<li>
						<a href='#contacts'>Контакты</a>
					</li>
				</ul>
			</header>
		</>
	)
}

export default Navbar
