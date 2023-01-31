import React, { useState, useRef, useEffect } from 'react'
import { getCategories } from '../store/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const AdminPage = () => {
	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')

	const dispatch = useDispatch()

	// const categories = useSelector(state => state.categories)

	// useEffect(() => {
	// getCategories(dispatch)
	// }, [dispatch])

	// console.log(categories)
	// const [title, setTitle] = useState('')

	return (
		<div>
			<h2 className='section-title'>Админ панель</h2>
			<div className=''>
				<form action=''>
					<input
						type='text'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<input
						type='text'
						value={image}
						onChange={e => setImage(e.target.value)}
					/>
					<select name='' id=''>
						<option value=''></option>
					</select>
					<input
						type='text'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input
						type='text'
						value={category}
						onChange={e => setCategory(e.target.value)}
					/>
				</form>
			</div>
		</div>
	)
}

export default AdminPage
