import React from 'react'

export default function Confirmation({ setModal, setModalFlag }) {
	return (
		<div className='modal-container' onClick={() => setModalFlag(false)}>
			<div
				className='modal-block'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<h3 className='modal-title'>Введите СМС-код</h3>
				<span className='modal-text'>Введите код из СМС,</span>
				<span className='modal-text modal-text-bold'>
					Для продолжения сброса сброса пароля Вам нужно ввести код, который Вам
					пришел в СМС.
				</span>
				<input type='text' className='modal-input' placeholder='СМС код' />
				<button className='modal-btn' onClick={() => setModal('newPassword')}>
					Подтвердить
				</button>
			</div>
		</div>
	)
}
