import React from 'react'

export default function PasswordRecovery({ setModal, setModalFlag }) {
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
					Введите свой номер телефона ниже, и мы вышлем СМС для его сброса.
				</span>
				<input
					type='text'
					className='modal-input'
					placeholder='Телефон номер'
				/>
				<button className='modal-btn' onClick={() => setModal('confirmation')}>
					Восстановить мой пароль
				</button>
			</div>
		</div>
	)
}
