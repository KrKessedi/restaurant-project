import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, useNavigate } from 'react-router-dom'
import { register } from '../../store/apiCalls'

const RegisterModal = ({ setModal, setModalFlag }) => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const error = useSelector((state) => state.user.error)
	const dispatch = useDispatch()

	const handleClick = (e) => {
		e.preventDefault()
		if (
			!username.trim() ||
			!email.trim() ||
			!password.trim() ||
			!password2.trim()
		) {
			alert('Some inputs are empty!')
			return
		}
		if (password2 === password) {
			register(dispatch, { username, email, password, password2 })
			!error && setModalFlag(false)
		} else {
			alert('Пароли не совпадают')
		}
	}
	return (
		<div className='modal-container' onClick={() => setModalFlag(false)}>
			<div
				className='modal-block'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<h3 className='modal-title'>Регистрация</h3>
				<span className='modal-text'>Присоединяйтесь,</span>
				<span className='modal-text modal-text-bold'>
					это не займёт много времени!
				</span>
				<form action='login' className='modal-form'>
					<input
						type='text'
						className='modal-input'
						placeholder='Имя'
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type='text'
						className='modal-input'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='text'
						className='modal-input'
						placeholder='Пароль'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type='text'
						className='modal-input'
						placeholder='Повторите пароль'
						onChange={(e) => setPassword2(e.target.value)}
					/>

					<button className='modal-btn' onClick={handleClick}>
						Зарегистирироваться
					</button>
				</form>
				<p className='modal-footer' onClick={() => setModal('login')}>
					Авторизоваться
				</p>
			</div>
		</div>
	)
}

export default RegisterModal
