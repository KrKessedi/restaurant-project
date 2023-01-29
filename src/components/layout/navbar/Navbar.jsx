import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BurgerMenu from './BurgerMenu'
import burgerBtn from '../../../images/burger-btn.svg'
import AuthModal from '../../auth/AuthModal'

const Navbar = ({ burger, setBurger, modalFlag, setModalFlag }) => {
	// const [burger, setBurger] = useState(false)
	// export setBurger
	// const [modalFlag, setModalFlag] = useState(false)
	const navigate = useNavigate()

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
								<Link to='/'>Главная</Link>
							</li>
							<li className='disc'>•</li>
							<li>
								<Link to='/about-us'>О нас</Link>
							</li>
							<li className='disc'>•</li>
							<li>
								<Link to='/menu'>Меню</Link>
							</li>
							<li className='disc'>•</li>
							<li>
								<Link to='/reserved'>Забронировать стол </Link>
							</li>
							<li className='disc'>•</li>
							<li>
								<Link to='/contacts'>Контакты</Link>
							</li>
						</ul>
					</div>
					<div className='sm:hidden w-44 flex justify-between items-center'>
						<motion.button
							whileHover={{ translateY: '-2px' }}
							className='basket-navigate-btn w-7 h-6'
						></motion.button>
						<button
							className='login-navigate-btn h-11 bg-my-orange rounded-[30px] px-9 text-white font-semibold'
							onClick={() => setModalFlag(true)}
						>
							Вход
						</button>
					</div>
				</nav>
				<ul className=' hidden w-[70%] sm:hidden md:flex justify-between items-end md:items-center pb-5'>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li className='disc'>•</li>
					<li>
						<Link to='/about-us'>О нас</Link>
					</li>
					<li className='disc'>•</li>
					<li>
						<Link to='/menu'>Меню</Link>
					</li>
					<li className='disc'>•</li>
					<li>
						<Link to='/reserved'>Забронировать стол </Link>
					</li>
					<li className='disc'>•</li>
					<li>
						<Link to='/contacts'>Контакты</Link>
					</li>
				</ul>
			</header>
		</>
	)
}

export default Navbar
