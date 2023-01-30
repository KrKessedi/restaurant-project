import { social } from '../Footer'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import avatar from '../../../images/user-avatar-svgrepo-com.svg'
import { logout } from '../../../store/apiCalls'

const BurgerMenu = ({ burger, setBurger, setModalFlag }) => {
	const user = useSelector((state) => state.user.currentUser)
	const dispatch = useDispatch()
	const list = [
		{ id: 1, title: 'Главная', to: '#' },
		{ id: 2, title: 'О нас', to: '#about-us' },
		{ id: 4, title: 'Меню', to: '#menu' },
		{ id: 5, title: 'Забронировать стол', to: '#reserved' },
		{ id: 6, title: 'Контакты', to: '#contacts' },
	]

	const style = [
		{
			zIndex: 10,
			transition: '.2s',
			background: 'rgb(0, 0, 0, 0.5)',
		},
		{
			zIndex: -1,
			transition: '.3s',
			background: 'rgb(0, 0, 0,0)',
		},
	]

	return (
		<div
			style={burger ? style[0] : style[1]}
			className=' burger-menu flex justify-end items-start absolute top-0 left-0 w-full min-h-[100vh]'
		>
			<div
				style={burger ? { display: 'block' } : { display: 'none' }}
				className='w-full h-full absolute -z-1'
				onClick={() => setBurger(false)}
			></div>
			<div
				style={
					burger
						? { transform: 'translateX(0)', transition: '.5s' }
						: { transform: 'translateX(400px)', transition: '.5s' }
				}
				className='w-[275px]  bg-white px-5 py-9 rounded-2xl shadow-[0_0_15px_white_,_inset_0_0_10px_rgb(0,0,0,.4)] mt-9 mr-9 flex flex-col'
			>
				<div className='w-full flex flex-row-reverse justify-between items-center mb-5'>
					<motion.button
						whileHover={{ translateY: '-2px' }}
						className='basket-navigate-btn w-7 h-6'
					></motion.button>
					{!user ? (
						<button
							className='login-navigate-btn h-11 bg-my-orange rounded-[30px] px-9 text-white font-semibold '
							onClick={() => {
								setModalFlag(true)
								setBurger(false)
							}}
						>
							Вход
						</button>
					) : (
						<div className='w-[40px]'>
							<img src={avatar} alt='avatar' />
						</div>
					)}
				</div>
				<ul className='flex flex-col gap-y-6 '>
					{list?.map((item) => (
						<li
							className='text-[#523526] font-semibold hover:text-my-orange hover:duration-200 duration-150'
							key={item.id}
							onClick={() => setBurger(false)}
						>
							<a href={item.to}>{item.title}</a>
						</li>
					))}
				</ul>
				{user && (
					<button
						className='mx-auto w-2/3 mt-9 rounded-xl bg-my-orange py-2   hover:bg-red-600 duration-200 hover:duration-200 border-none'
						onClick={() => {
							logout(dispatch)
							setBurger(false)
						}}
					>
						Выйти
					</button>
				)}
			</div>
		</div>
	)
}

export default BurgerMenu
