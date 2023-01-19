import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
	return (
		<nav className='flex justify-between w-11/12 mx-auto mb-16 items-center'>
			<div className='logo-block flex items-center justify-center cursor-pointer'>
				<h3 className='logo'>M</h3>
			</div>
			<ul className='nav__navigate-list flex justify-between'>
				<li>
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
					<a href='#contacts'>Контакты</a>
				</li>
			</ul>
			<div className='nav__navigate-block w-44 flex justify-between'>
				<button className='basket-navigate-btn w-7 h-6'></button>
				<button className='login-navigate-btn px-9'>Вход</button>
			</div>
		</nav>
	)
}

export default Navbar
