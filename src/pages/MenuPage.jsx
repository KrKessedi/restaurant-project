import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import bgMenu from '../images/bgMenu.png'
import bgMenu2 from '../images/bgMenu2.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentDish } from '../store/dishSlice'
import fullStar from '../images/star-fill.svg'
import emptyStar from '../images/star-empty.svg'
import Rating from 'react-rating'
import DishDetail from '../components/dish/DishDetail'
import {
	addDishInLocalStorage,
	getDetailDish,
	getDishes,
} from '../store/apiCalls'

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
	const [detail, setDetail] = useState(false)

	const dispatch = useDispatch()
	const currentDish = useSelector(state => state.dishes.currentDish)
	const dishes = useSelector(state => state.dishes.dishes)
	let dishesFilter = dishes.filter(
		item => item.category.toLowerCase() === currentDish
	)

	// useEffect(getDishes(), [])

	function handleGet(title) {
		getDetailDish(dispatch, title, setDetail)
	}

	return (
		<>
			<DishDetail detail={detail} setDetail={setDetail} />

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
				<div className='w-[94%] mx-auto'>
					<div className=' flex space-x-16 overflow-x-scroll  m-auto  scroll-smooth  snap-x mb-10'>
						{menuCategory?.map(item => (
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
					<hr className='border-[#523526B0] mb-12' />
					<h2 className='text-[#523526] font-montserrat font-semibold text-[40px] uppercase tracking-[0.07em]'>
						{currentDish}
					</h2>
					<div className='flex flex-wrap gap-5 mb-12'>
						{dishesFilter?.map(item => (
							<div
								className='w-52 min-w-[23.3%] md:min-w-[31%] lg:min-w-[28%] sm:min-w-[38%] 2sm:min-w-[65%] 2sm:snap-start sm:h-[320px] h-[355px] relative flex flex-col items-center justify-center'
								key={item.title}
							>
								<img
									src={item.photo}
									alt=''
									className=' w-52 absolute top-0 md:w-44 md:-top-1 sm:w-40'
								/>
								<div className='rounded-2xl pt-40 sm:pt-28 flex flex-col justify-center items-center w-full h-5/6 bg-my-light-gray '>
									<h5 className='font-semibold font-["Montserat"] text-xl mb-3 uppercase md:text-lg'>
										{item.title}
									</h5>
									{/* <div className=' w-[122px] flex mb-1 justify-center items-start'>
										<Rating
											className=' mr-4'
											emptySymbol={
												<img src={emptyStar} className='mr-1' alt='dishes' />
											}
											fullSymbol={
												<img
													src={fullStar}
													className='mr-1 drop-shadow-[-1px_-1px_14px_#fbf187]'
													alt='dishes'
												/>
											}
											initialRating={item.rating}
											readonly
										/>
										<h5 className='popular-dishes__rating-text'>
											{item.rating}
										</h5>
									</div> */}
									<h5 className='popular-dishes__price font-bold font-["Montserat"] uppercase text-base'>
										{item.price} сом
									</h5>
								</div>
								<button
									className=' font-semibold font-["Montserat"] w-56 rounded-2xl uppercase absolute bottom-2 text-white py-2 px-5 bg-my-orange shadow-[-4px_5px_29px_#de6e4540_,_4px_-4px_39px_#de6e4566] md:w-44 md:text-xs '
									onClick={() => handleGet(item.title)}
								>
									узнать подробнее
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
