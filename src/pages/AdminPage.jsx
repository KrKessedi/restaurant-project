import React, { useState, useRef, useEffect } from 'react'
import {
	addDish,
	deleteDish,
	getCategories,
	getDishes,
	GetOneDish,
} from '../store/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import UpdateDish from '../components/admin/UpdateDish'

const AdminPage = () => {
	const [modalFlag, setModalFlag] = useState(false)

	const { dishes, categories, error, oneDish } = useSelector(
		state => state.dishes
	)

	const filePicker = useRef(null)
	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
	const [dishDetail, setDishDetail] = useState('')
	const [dishDetail2, setDishDetail2] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		getCategories(dispatch)
		getDishes(dispatch)
	}, [dispatch])

	console.log(dishes[0].image)

	function handlePick() {
		filePicker.current.click()
	}

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
		setTitle('')
		setImage(null)
		setCategory('')
		setDescription('')
		setPrice('')
	}

	function handleSearch() {
		GetOneDish(dispatch, dishDetail, setModalFlag)
	}

	function handleDelete() {
		deleteDish(dispatch, dishDetail2)
	}

	return (
		<div className='py-24 mb-20 rounded-2xl px-16 shadow-[0_0_30px_rgb(0,0,0,0.5)] bg-slate-200'>
			<h2 className='section-title'>Админ панель</h2>
			<div className=''>
				<div className='flex flex-row items-center justify-center gap-10 flex-wrap'>
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
				<div className='flex flex-col gap-x-5 items-center justify-center mt-9'>
					<h2 className='section-title text-red-600'>Danger zone</h2>
					<div className='w-full flex justify-center flex-col items-center'>
						{oneDish ? (
							<UpdateDish modalFlag={modalFlag} setModalFlag={setModalFlag} />
						) : null}
						<div className='w-full'>
							<h3 className='mb-5 text-3xl font-montserrat font-bold text-red-600 '>
								Изменить
							</h3>
							<div className='flex justify-start gap-x-6 mb-9'>
								<input
									className='admin-input'
									type='text'
									placeholder='Dish title'
									value={dishDetail}
									onChange={e => setDishDetail(e.target.value)}
								/>
								<button
									onClick={handleSearch}
									className='bg-my-orange border-2 border-my-orange rounded-2xl py-3 px-10 text-white'
								>
									Найти
								</button>
							</div>
						</div>
						<div className=' w-full text-end'>
							<h3 className='mb-5 text-3xl font-montserrat font-bold text-red-600 '>
								Удалить
							</h3>
							<div className=' flex justify-end gap-x-6'>
								<input
									className='admin-input'
									type='text'
									placeholder='Dish title'
									value={dishDetail2}
									onChange={e => setDishDetail2(e.target.value)}
								/>
								<button
									onClick={handleDelete}
									className='bg-red-600 border-2 border-red-600 rounded-2xl py-3 px-10 text-white'
								>
									Найти
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <img src={dishes[0].image} alt='' /> */}
		</div>
	)
}

export default AdminPage
