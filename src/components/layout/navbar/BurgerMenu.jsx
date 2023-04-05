import { motion } from 'framer-motion'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { list } from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import avatar from '../../../images/user-avatar-svgrepo-com.svg'
import { logout } from '../../../store/apiCalls'

const BurgerMenu = ({ burger, setBurger, setModalFlag }) => {
	const user = useSelector(state => state.user.currentUser)
	const dispatch = useDispatch()
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

	const navigate = useNavigate()
	const { pathname } = useLocation()

	return (
		<div
			style={burger ? style[0] : style[1]}
			className=' burger-menu flex justify-end items-start absolute top-0 left-0 w-full h-full'
			onClick={() => setBurger(false)}
		>
			<div
				onClick={e => e.stopPropagation()}
				style={
					burger
						? { transform: 'translateX(0)', transition: '.5s' }
						: { transform: 'translateX(400px)', transition: '.5s' }
				}
				className='w-[275px] h-[400px] fixed bg-white px-5 py-9 rounded-2xl shadow-[0_0_15px_white_,_inset_0_0_10px_rgb(0,0,0,.4)] mt-9 mr-9'
			>
				<div className='w-full flex flex-row-reverse justify-between items-center mb-5'>
					<motion.button
						onClick={() => navigate('/basket')}
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
					{list?.map(item => (
						<li
							style={
								pathname === item.to
									? { color: '#de6e45', boxShadow: '0 1.5px 0 #de6e45' }
									: null
							}
							className='text-my-brown font-semibold hover:text-my-orange hover:duration-200 duration-150'
							key={item.id}
							onClick={() => setBurger(false)}
						>
							<Link to={item.to}>{item.title}</Link>
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
