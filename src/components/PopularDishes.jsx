import React from 'react'
import popularDish from '../images/image 97.svg'
import fullStar from '../images/star-fill.svg'
import emptyStar from '../images/star-empty.svg'
import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import Rating from 'react-rating'
import '../styles/PopularDishes.css'

const PopularDishes = () => {
	const dishes = [
		{
			image: popularDish,
			rating: 3,
			id: 1,
			title: 'паста и ризотто',
			price: 300,
		},

		{
			image: popularDish,
			rating: 5,
			id: 2,
			title: 'паста и ризотто',
			price: 300,
		},

		{
			image: popularDish,
			rating: 5,
			id: 3,
			title: 'паста и ризотто',
			price: 300,
		},

		{
			image: popularDish,
			rating: 3,
			id: 4,
			title: 'паста и ризотто',
			price: 300,
		},

		{
			image: popularDish,
			rating: 4,
			id: 5,
			title: 'паста и ризотто',
			price: 300,
		},
	]
	return (
		<section className='popular-dishes-section mt-1 mb-20'>
			<h2 className='popular-dishes__title w-full text-center mb-7 text-5xl'>
				Популярные блюда
			</h2>
			<div className='popular-dishes__card-block flex gap-x-8'>
				<ScrollingCarousel>
					{dishes?.map(item => (
						<div
							className='popular-dishes__parent-card mx-4 relative '
							key={item.id}
						>
							<img
								src={item.image}
								alt=''
								className=' popular-dishes__image w-4/6 absolute top-0'
							/>
							<div className='popular-dishes__child-card rounded-2xl pt-40 flex flex-col h-5/6'>
								<h5 className='popular-dishes__dish-title text-xl mb-3 uppercase'>
									{item.title}
								</h5>
								<div className='popular-dishes__rating-block flex mb-1'>
									<Rating
										className='popular-dishes__rating mr-4'
										emptySymbol={<img src={emptyStar} className='mr-1' />}
										fullSymbol={
											<img src={fullStar} className='fill-start mr-1' />
										}
										initialRating={item.rating}
										readonly
									/>
									<h5 className='popular-dishes__rating-text'>{item.rating}</h5>
								</div>
								<h5 className='popular-dishes__price uppercase text-base'>
									{item.price} сом
								</h5>
							</div>
							<button
								className=' 
									popular-dishes__detail-btn w-56 uppercase absolute bottom-2 text-white py-2 px-5'
							>
								узнать подробнее
							</button>
						</div>
					))}
				</ScrollingCarousel>
			</div>
		</section>
	)
}

export default PopularDishes
