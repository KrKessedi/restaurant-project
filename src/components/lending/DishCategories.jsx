import React from 'react'
import breakfasts from '../../images/breakfast.png'
import soups from '../../images/soups.png'
import hotDish from '../../images/hot dish.png'
import pastAndRisotto from '../../images/pasta and risotto.png'
import snacks from '../../images/snacks.png'
import childrensMenu from "../../images/children's menu.png"
import salads from '../../images/salads.png'
import cauces from '../../images/cauces.png'
import drinks from '../../images/drinks.png'
import { changeCurrentDish } from '../../store/dishSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DishCategories = () => {
	const categories = [
		{
			id: 1,
			title: 'завтраки',
			to: 'breakfast',
			image: breakfasts,
		},
		{
			id: 2,
			title: 'супы',
			to: 'soups',
			image: soups,
		},
		{
			id: 3,
			title: 'горячие блюдо',
			to: 'hotDish',
			image: hotDish,
		},
		{
			id: 4,
			title: 'паста и ризотто',
			to: 'pastAndRisotto',
			image: pastAndRisotto,
		},
		{
			id: 5,
			title: 'закуски и гарниры',
			to: 'snacks',
			image: snacks,
		},
		{
			id: 6,
			title: 'детское меню',
			to: 'childrensMenu',
			image: childrensMenu,
		},
		{
			id: 7,
			title: 'салаты',
			to: 'salads',
			image: salads,
		},
		{
			id: 8,
			title: 'соусы',
			to: 'cauces',
			image: cauces,
		},
		{
			id: 9,
			title: 'напитки',
			to: 'drinks',
			image: drinks,
		},
	]

	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<section className='dish-categories w-full mb-20' id='menu'>
			<h2 className='section-title'>Категории блюд</h2>
			<div className='dish-castegories-block w-[91%] flex flex-wrap justify-between mx-auto pt-14 gap-y-16 md:gap-y-5 '>
				{categories?.map(item => (
					<div
						className='dish-categories__card relative flex flex-col w-[29.4%] md:w-[32%] 2sm:w-[46%] h-72 lg:h-60 md:h-64 justify-end text-center rounded-2xl overflow-hidden bg-my-light-gray pb-6 hover:shadow-[0_-20px_50px_-12px_#ff5112a7] hover:duration-300 duration-300 2sm:h-52'
						key={item.id}
						onClick={() => {
							navigate('/menu')
							dispatch(changeCurrentDish(item.title))
						}}
					>
						<img
							src={item.image}
							alt=''
							className='card dash-categories__card-image absolute -translate-x-[22%] -translate-y-[30%] duration-[1600ms] md:-translate-x-[24%] md:-translate-y-[38%] sm:-translate-x-[28%] sm:-translate-y-[50%] 2sm:-translate-x-[28%] 2sm:-translate-y-[30%]'
						/>
						<h5 className='dish-categories__card-title text-xl capitalize font-semibold font-["Montserrat]'>
							{item.title}
						</h5>
					</div>
				))}
			</div>
		</section>
	)
}

export default DishCategories
