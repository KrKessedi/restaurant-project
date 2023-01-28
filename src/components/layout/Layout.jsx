import React, { useState } from 'react'
// import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BurgerMenu from './navbar/BurgerMenu'
import Navbar from './navbar/Navbar'
// import '../../styles/HomePage.css'

const Layout = () => {
	const [burger, setBurger] = useState(false)

	return (
		<div className='overflow-hidden relative'>
			<BurgerMenu setBurger={setBurger} burger={burger} />

			<Navbar burger={burger} setBurger={setBurger} />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout

// return (
//   <div className='relative overflow-x-hidden flex flex-col items-center'>
//     {/* <motion.div
//       className='home-top-bg w-[1693px] z-[-1] -top-[-100] absolute h-[990px] rounded-[100%]'
//       initial={{ translateY: '-100%' }}
//       animate={{ translateY: '-30%' }}
//       transition={{ duration: 0.5, delay: 0 }}
//     ></motion.div> */}
//     <Navbar />
//     <Outlet />
//     <Footer />
//   </div>
// );
