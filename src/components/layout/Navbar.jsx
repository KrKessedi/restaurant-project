import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/Navbar.css'

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<nav className='flex justify-between w-11/12 mx-auto mb-16 items-center'>
			<div className='logo-block flex items-center justify-center cursor-pointer w-[89px] h-[90px]  '>
				<h3 className='logo font-["Times_New_Roman"] text-[32px] text-white '>
					M
				</h3>
			</div>
			<ul className='w-[750px] flex justify-between'>
				<li className='list-none'>
					<a href='#'>Главная</a>
				</li>
				<li>
					<a href='#about-us'>О нас</a>
				</li>
				<li>
					<a href='#menu'>Меню</a>
				</li>
				<li>
					<a href='#'>О доставке</a>
				</li>
				<li>
					<a href='#'>Забронировать стол </a>
				</li>
				<li>
					<a href='#contacts'>Контакты</a>
				</li>
			</ul>
			<div className=' w-44 flex justify-between items-center'>
				<button className='basket-navigate-btn w-7 h-6'></button>
				<button className='login-navigate-btn h-11 bg-my-orange rounded-[30px] px-9 text-white font-semibold '>
					Вход
				</button>
			</div>
		</nav>
	)
}

export default Navbar
