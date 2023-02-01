import React, { useState, useRef, useEffect } from 'react'
import { addDish, getCategories, getDishes } from '../store/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { data } from 'autoprefixer'

const AdminPage = () => {
	const { dishes, categories, error } = useSelector(state => state.dishes)
	const filePicker = useRef(null)
	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		getCategories(dispatch)
		getDishes(dispatch)
	}, [dispatch])

	function handlePick() {
		filePicker.current.click()
	}

	useEffect(() => {
		// console.log(dishes)
	}, [dishes])

	function handleAdd() {
		if (
			!title.trim() ||
			!category.trim() ||
			!description.trim() ||
			!price.trim()
		) {
			alert('Some inputs are empty')
			return
		}
		let formData = new FormData()
		formData.append('title', title)
		formData.append('image', image)
		formData.append('category', category)
		formData.append('description', description)
		formData.append('price', price)
		addDish(dispatch, formData)
	}

	return (
		<div className='mb-96'>
			<h2 className='section-title'>Админ панель</h2>
			<div className=''>
				<div
					action=''
					className='flex flex-row items-center justify-center gap-10 flex-wrap'
				>
					<input
						className='admin-input'
						type='text'
						placeholder='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<input
						ref={filePicker}
						className='hidden'
						type='file'
						accept='image/*,.png,.jpg,.web'
						onChange={e => setImage(e.target.files[0])}
					/>
					<button
						onClick={handlePick}
						className='bg-my-orange border-2 border-my-orange rounded-2xl py-3 px-10 text-white'
					>
						Выбрать фото
					</button>
					<select
						id='large'
						onChange={e => setCategory(e.target.value)}
						// onChange={e => console.log(e.target.valuse)}
						value={category}
						className='block px-6 border-2 border-my-orange py-3 text-base text-white rounded-2xl bg-my-orange'
					>
						{categories?.map(item => (
							<option
								// value={`Category object (${item.slug})`}
								// onClick={e => console.log('e.target.value')}
								value={`${item.slug}/${item.name}`}
								key={item.name}
								className=' hover:duration-200 hover:bg-black bg-white text-black duration-150 hover:text-white capitalize py-1'
							>
								{item.name}
							</option>
						))}
					</select>
					<input
						className='admin-input'
						type='text'
						placeholder='description'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input
						className='admin-input'
						type='text'
						placeholder='price'
						value={price}
						onChange={e => setPrice(e.target.value)}
					/>
					<button
						className='bg-my-orange border-2 border-my-orange rounded-2xl py-3 px-10 text-white'
						onClick={handleAdd}
					>
						Отправить
					</button>
				</div>
			</div>
			{/* <img src={dishes[0].image} alt='' /> */}
		</div>
	)
}

export default AdminPage
