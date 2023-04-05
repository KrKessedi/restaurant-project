import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { restorePassword } from '../../store/apiCalls'

export default function Confirmation({ setModal, setModalFlag }) {
	const [code, setCode] = useState('')
	const dispatch = useDispatch()
	const handleClick = () => {
		if (!code.trim()) return
		restorePassword(dispatch, code)
		setModal('newPassword')
	}
	return (
		<div className='modal-container' onClick={() => setModalFlag(false)}>
			<div
				className='modal-block'
				onClick={e => {
					e.stopPropagation()
				}}
			>
				<h3 className='modal-title'>Введите код</h3>
				<span className='modal-text'>Введите код из почты</span>
				<span className='modal-text modal-text-bold'>
					Для продолжения сброса пароля Вам нужно ввести код, который Вам пришел
					на почту.
				</span>
				<input
					type='text'
					className='modal-input'
					placeholder='СМС код'
					onChange={e => setCode(e.target.value)}
				/>
				<button className='modal-btn' onClick={handleClick}>
					Подтвердить
				</button>
			</div>
		</div>
	)
}
