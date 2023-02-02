import React from 'react'
import { useState } from 'react'
import { forgotPassword } from '../../store/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

export default function PasswordRecovery({ setModal, setModalFlag }) {
	const dispatch = useDispatch()
	const error = useSelector((state) => state.user.error)
	const [email, setEmail] = useState('')
	const handleClick = () => {
		if (!email.trim()) {
			return
		}
		forgotPassword(dispatch, email, setModal)
	}
	return (
		<div className='modal-container' onClick={() => setModalFlag(false)}>
			<div
				className='modal-block'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<h3 className='modal-title'>Восстановление пароля</h3>
				<span className='modal-text'>Забыли пароль?</span>
				<span className='modal-text modal-text-bold'>
					Введите свой email ниже, и мы вышлем код для его сброса.
				</span>
				<input
					type='text'
					onChange={(e) => setEmail(e.target.value)}
					className='modal-input'
					placeholder='Email'
				/>
				<button className='modal-btn' onClick={handleClick}>
					Восстановить мой пароль
				</button>
			</div>
		</div>
	)
}
