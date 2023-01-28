import React from 'react'

export default function NewPassword({ setModal, setModalFlag }) {
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
				<input type='text' className='modal-input' placeholder='Пароль' />
				<input
					type='text'
					className='modal-input'
					placeholder='Повторите пароль'
				/>
				<button className='modal-btn' onClick={() => setModalFlag(false)}>
					Подтвердить
				</button>
			</div>
		</div>
	)
}
