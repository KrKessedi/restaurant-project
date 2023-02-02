import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restorePassword2 } from '../../store/apiCalls'

export default function NewPassword({ setModal, setModalFlag }) {
	const dispatch = useDispatch()
	const code = useSelector((state) => state.user.code)

	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')

	const handleClick = () => {
		if (!password.trim() || !password2.trim()) return
		restorePassword2(dispatch, { code, password, password2 }, setModalFlag)
	}

	return (
		<div className='modal-container' onClick={() => setModalFlag(false)}>
			<div
				className='modal-block'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<h3 className='modal-title'>Создание нового пароля</h3>
				<span className='modal-text'>Нужно создать новый пароль?</span>
				<span className='modal-text modal-text-bold'>
					Введите свой свой новый пароль а после повторите его.
				</span>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='text'
					className='modal-input'
					placeholder='Пароль'
				/>
				<input
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					type='text'
					className='modal-input'
					placeholder='Повторите пароль'
				/>
				<button className='modal-btn' onClick={handleClick}>
					Подтвердить
				</button>
			</div>
		</div>
	)
}
