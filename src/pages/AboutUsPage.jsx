import React from 'react'
import bgImg from '../images/Ellipse1.svg'
import bgMac from '../images/bgMacarons.png'
import macaron from '../images/macaron.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function AboutUsPage() {
	return (
		<div className='min-h-[100vh]'>
			<motion.img
				src={bgImg}
				initial={{ translateY: '-150%' }}
				transition={{ delay: 0, duration: 0.8 }}
				animate={{ translateY: '-35%' }}
				className='absolute -z-2 '
			></motion.img>
			<div className='container md:mx-auto'>
				<div className='flex flex-col items-center justify-center relative min-h-[700px] mb-80'>
					<h1 className='text-white font-times text-8xl font-extrabold  2sm:text-8xl'>
						Те самые макарон...
					</h1>
					<motion.img
						initial={{ scale: 0.2, rotate: '-90deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						transition={{ duration: 0.9 }}
						src={macaron}
						alt=''
						className='mb-20 w-2/6'
					/>
					<motion.img
						initial={{ translateY: '200%' }}
						animate={{ translateY: '10%' }}
						transition={{ duration: 0.8 }}
						src={bgMac}
						alt=''
						className='absolute w-4/5 -z-1'
					/>
				</div>
			</div>
			<div className='mx-auto w-[91.1%]'>
				<div className='about-us__container'>
					<div className='about-us__left'>
						<h4 className='about-us__title'>О Себе</h4>
					</div>
					<div className='about-us__right'></div>
				</div>
			</div>
		</div>
	)
}
