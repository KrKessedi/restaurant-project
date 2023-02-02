import React, { useState, useRef, useEffect } from 'react'
import { addDish, deleteDish, getDishes, GetOneDish } from '../store/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import UpdateDish from '../components/dish/UpdateDish'

import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage'
import app from '../firebase'

export const categories = [
	{
		id: 1,
		title: 'завтраки',
		slug: 'breakfast',
	},
	{
		id: 2,
		title: 'супы',
		slug: 'soups',
	},
	{
		id: 3,
		title: 'горячие блюдо ',
		slug: 'hot_dish',
	},
	{
		id: 4,
		title: 'паста и ризотто',
		slug: 'past_and_risotto',
	},
	{
		id: 5,
		title: 'закуски и гарниры',
		slug: 'snacks',
	},
	{
		id: 6,
		title: 'детское меню',
		slug: 'childrens_menu',
	},
	{
		id: 7,
		title: 'салаты',
		slug: 'salads',
	},
	{
		id: 8,
		title: 'соусы',
		slug: 'cauces',
	},
	{
		id: 9,
		title: 'напитки',
		slug: 'drinks',
	},
]

const AdminPage = () => {
	const [modalFlag, setModalFlag] = useState(false)

	const { dishes, error, oneDish } = useSelector(state => state.dishes)

	const filePicker = useRef(null)
	const [title, setTitle] = useState('')
	const [category, setCategory] = useState('завтраки')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState(0)
	const [dishDetail, setDishDetail] = useState('')
	const [dishDetail2, setDishDetail2] = useState('')

	const [file, setFile] = useState(null)
	const [loaded, setLoaded] = useState('Сохранить изменения')
	let inputs = { title, category, price, description }
	const dispatch = useDispatch()

	console.log(dishes)

	useEffect(() => {
		getDishes(dispatch)
	}, [dispatch])

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

		const fileName = new Date().getTime() + file.name
		const storage = getStorage(app)
		const storageRef = ref(storage, fileName)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				setLoaded('Загруска выполнена на ' + progress + '%')

				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused')
						break
					case 'running':
						console.log('Upload is running')
						break
					default:
				}
			},
			error => {
				console.log(error)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					const dishe = {
						...inputs,
						photo: downloadURL,
					}
					addDish(dispatch, dishe)
				})
			}
		)

		setTitle('')
		setFile(null)
		// setCategory('')
		setDescription('')
		setPrice('')
	}

	function handleSearch() {
		GetOneDish(dispatch, dishDetail, setModalFlag)
	}

	function handleDelete() {
		deleteDish(dispatch, dishDetail2, setDishDetail2)
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
						onChange={e => setFile(e.target.files[0])}
					/>
					<button
						onClick={handlePick}
						className='bg-my-orange border-2 border-my-orange rounded-2xl py-3 px-10 text-white'
					>
						Выбрать фото
					</button>
					<select
						id='large'
						onChange={e => setCategory(e.target.value.toLowerCase())}
						// onChange={e => console.log(e.target.valuse)}
						value={category}
						className='block px-6 border-2 border-my-orange py-3 text-base text-white rounded-2xl bg-my-orange'
					>
						{categories?.map(item => (
							<option
								// value={Category object (${item.slug})}
								// onClick={e => console.log('e.target.value')}
								value={item.title}
								key={item.id}
								className=' hover:duration-200 hover:bg-black bg-white text-black duration-150 hover:text-white capitalize py-1'
							>
								{item.title}
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
						type='number'
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
		</div>
	)
}

export default AdminPage
