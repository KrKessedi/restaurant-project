import React, { useState } from 'react'
// import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './navbar/Navbar'
// import '../../styles/HomePage.css'

const Layout = () => {
	const [s, setEs] = useState('qwert')
	return (
		<>
			<Navbar />
			<Outlet s={s} />
			<Footer />
		</>
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
