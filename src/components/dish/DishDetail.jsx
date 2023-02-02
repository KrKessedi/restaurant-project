import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDishInLocalStorage } from '../../store/apiCalls'
import spagetti from '../../images/pasta and risotto.png'

const DishDetail = ({ detail, setDetail }) => {
	const dispatch = useDispatch()

	const { detailDish } = useSelector(state => state.dishes)

	// console.log(detailDish)

	function handleAdd(dish) {
		addDishInLocalStorage(dispatch, dish)
	}

	return (
		<div
			onClick={() => setDetail(false)}
			className='modal-container backdrop-blur-[9px]'
			style={
				detail
					? {
							opacity: 1,
							background: 'rgb(0,0,0,0.5)',
							zIndex: 50,
							transition: '.3s',
					  }
					: {
							opacity: 0,
							background: 'rgb(0,0,0,0)',
							zIndex: -10,
							transition: '.3s',
					  }
			}
		>
			{detailDish ? (
				<div
					className='modal-block flex-row w-auto gap-x-14'
					onClick={e => e.stopPropagation()}
				>
					<img src={detailDish.photo} alt='' className='w-72' />
					<div className='w-[500px]'>
						<h3 className='text-6xl mb-10 text-my-brown'>{detailDish.title}</h3>
						<p className='text-xl text-black mb-10'>{detailDish.description}</p>
						<div className='flex gap-x-5 items-center'>
							<p className='text-3xl text-my-brown'>{detailDish.price} сом</p>
							<button
								className='detail-btn'
								onClick={() => handleAdd(detailDish)}
							>
								Добавить в корзину
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className=''>qwerty</div>
			)}
		</div>
	)
}

export default DishDetail
