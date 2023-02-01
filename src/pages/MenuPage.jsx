import React from 'react'
import { motion } from 'framer-motion'
import bgMenu from '../images/bgMenu.png'
import bgMenu2 from '../images/bgMenu2.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentDish } from '../store/dishSlice'

const menuCategory = [
	{ id: 1, title: 'затраки' },
	{ id: 2, title: 'супы' },
	{ id: 3, title: 'горячие блюдо' },
	{ id: 4, title: 'паста и ризотто' },
	{ id: 5, title: 'закуски и гарниры' },
	{ id: 6, title: 'детское меню' },
	{ id: 7, title: 'салаты' },
	{ id: 8, title: 'соусы' },
	{ id: 9, title: 'напитки' },
]

export default function MenuPage() {
	const dispatch = useDispatch()
	const currentDish = useSelector((state) => state.dishes.currentDish)
	return (
		<div className='min-h-[100vh]'>
			<motion.img
				src={bgMenu}
				initial={{ translateY: '-150%' }}
				transition={{ delay: 0, duration: 0.8 }}
				animate={{ translateY: '-35%' }}
				className='absolute -z-2 '
			></motion.img>
			<motion.img
				src={bgMenu2}
				initial={{ right: '-100px', top: '-100px' }}
				transition={{ delay: 0, duration: 0.8 }}
				animate={{ right: 0, top: '0' }}
				className='absolute -z-2 '
			></motion.img>
			<div className=' flex space-x-16 overflow-x-scroll w-[93%] m-auto  scroll-smooth md:w-[94%] snap-x'>
				{menuCategory?.map((item) => (
					<button
						style={
							currentDish === item.title ? { background: '#de6e45' } : null
						}
						className='w-60 bg-[#f1f1f1] rounded-2xl px-2 py-1 font-montserrat font-semibold text-[16px]  text-[#523526] uppercase min-w-[200px] '
						key={item.id}
						onClick={() => dispatch(changeCurrentDish(item.title))}
					>
						{item.title}
					</button>
				))}
			</div>
		</div>
	)
}
