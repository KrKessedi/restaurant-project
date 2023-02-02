import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateDish } from '../../store/apiCalls'
import { categories } from '../../pages/AdminPage'

const UpdateDish = ({ modalFlag, setModalFlag }) => {
	const { oneDish, dishes } = useSelector(state => state.dishes)
	const { currentUser } = useSelector(state => state.user)
	const dispatch = useDispatch()

	console.log(dishes)

	const filePicker = useRef(null)

	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')

	useEffect(() => {
		if (oneDish) {
			setTitle(oneDish.title)
			setImage(oneDish.image)
			setCategory(oneDish.category)
			setDescription(oneDish.description)
			setPrice(oneDish.price)
		}
	}, [oneDish])

	function handleEdit(e) {
		e.preventDefault()
		let formData = new FormData()
		formData.append('title', title)
		// formData.append('image', image)
		formData.append('category', category)
		formData.append('description', description)
		formData.append('price', price)

		updateDish(dispatch, oneDish.title, formData, setModalFlag)
	}

	function handlePick(e) {
		e.preventDefault()
		filePicker.current.click()
	}

	return (
		<div
			className='modal-container'
			style={
				modalFlag
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
			<div
				className='modal-block items-center relative'
				onClick={e => {
					e.stopPropagation()
				}}
			>
				<h3 className='modal-title'>Изменить блюдо</h3>

				<form
					onSubmit={e => e.preventDefault()}
					action=''
					className='flex flex-col items-center gap-y-9'
				>
					<input
						className='edit-input'
						type='text'
						placeholder='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<input
						ref={filePicker}
						className='hidden'
						type='file'
						// value={image}
						// accept='image/*,.png,.jpg,.web'
						onChange={e => setImage(`image: ${e.target.files[0]}`)}
					/>
					<button
						onClick={handlePick}
						className='w-full text-xl font-semibold  bg-my-orange border-2 border-my-orange rounded-2xl py-3 px-10 text-white'
					>
						Выбрать фото
					</button>
					<select
						id='large'
						onChange={e => setCategory(e.target.value)}
						// onChange={e => console.log(e.target.valuse)}
						value={category}
						className='w-full text-xl font-semibold px-6 border-2 border-my-orange py-3 text-white rounded-2xl bg-my-orange'
					>
						{categories?.map(item => (
							<option
								// value={`Category object (${item.slug})`}
								// onClick={e => console.log('e.target.value')}
								value={item.slug}
								key={item.title}
								className=' hover:duration-200 hover:bg-black bg-white text-black duration-150 hover:text-white capitalize py-1'
							>
								{item.title}
							</option>
						))}
					</select>
					<input
						className='edit-input'
						type='text'
						placeholder='description'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input
						className='edit-input'
						type='text'
						placeholder='price'
						value={price}
						onChange={e => setPrice(e.target.value)}
					/>
					<button
						className='bg-my-orange border-2 border-my-orange rounded-2xl py-3 px-10 text-white text-xl font-semibold hover:rounded-3xl hover:duration-150 duration-200 hover:bg-green-500 hover:shadow-2xl hover:border-green-500'
						onClick={handleEdit}
					>
						Отправить
					</button>
				</form>
				<button
					className=' text-2xl font-montserrat rounded-[30px] bg-my-orange text-white py-2 px-5 absolute bottom-0 right-0 hover:rounded-tr-none hover:rounded-bl-none hover:font-semibold hover:bg-black hover:duration-200 duration-150'
					onClick={() => setModalFlag(false)}
				>
					Отмена
				</button>
			</div>
		</div>
	)
}

export default UpdateDish
