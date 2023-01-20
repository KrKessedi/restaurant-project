import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/DishCategories.css'
import breakfasts from '../images/breakfast.svg'
import soups from '../images/soups.svg'
import hotDish from '../images/hot dish.svg'
import pastAndRisotto from '../images/pasta and risotto.svg'
import snacks from '../images/snacks.svg'
import childrensMenu from "../images/children's menu.svg"
import salads from '../images/salads.svg'
import sauces from '../images/sauces.svg'
import drinks from '../images/drinks.svg'

const DishCategories = () => {
	const navigate = useNavigate()
	const categories = [
		{
			id: 1,
			title: 'Завтраки',
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
			title: 'Горячие блюдо ',
			to: 'hotDish',
			image: hotDish,
		},
		{
			id: 4,
			title: 'Паста и Ризотто',
			to: 'pastAndRisotto',
			image: pastAndRisotto,
		},
		{
			id: 5,
			title: 'Закуски и гарниры',
			to: 'snacks',
			image: snacks,
		},
		{
			id: 6,
			title: 'Детское меню',
			to: 'childrensMenu',
			image: childrensMenu,
		},
		{
			id: 7,
			title: 'Салаты',
			to: 'salads',
			image: salads,
		},
		{
			id: 8,
			title: 'Соусы',
			to: 'sauces',
			image: sauces,
		},
		{
			id: 9,
			title: 'Напитки',
			to: 'drinks',
			image: drinks,
		},
	]
	return (
		<section className='dish-categories w-full mb-20' id='menu'>
			<h2 className='dish-categories-title text-5xl w-full text-center'>
				Категории блюд
			</h2>
			<div className='dish-castegories-block flex flex-wrap justify-between mx-auto pt-14'>
				{categories?.map(item => (
					<div
						className='dish-categories__card relative flex flex-col justify-end text-center rounded-2xl pb-6 overflow-hidden'
						key={item.id}
					>
						<motion.img
							initial={{ translateX: '-25%', translateY: '-25%' }}
							transition={{ delay: 0, duration: 0.8 }}
							whileHover={{ translateX: '-18%', translateY: '-18%' }}
							src={item.image}
							alt=''
							className='dash-categories__card-image absolute'
						/>
						<h5 className='dish-categories__card-title text-xl'>
							{item.title}
						</h5>
					</div>
				))}
			</div>
		</section>
	)
}

export default DishCategories
