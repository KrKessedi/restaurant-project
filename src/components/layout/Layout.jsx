import React from 'react'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import '../../styles/HomePage.css'

const Layout = () => {
	return (
		<div className='relative overflow-x-hidden flex flex-col items-center container'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
