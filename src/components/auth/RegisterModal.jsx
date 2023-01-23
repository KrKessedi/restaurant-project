import React from 'react'

const RegisterModal = ({ setModal, setModalFlag }) => {
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

				<input type='text' className='modal-input' placeholder='Имя' />
				<input
					type='text'
					className='modal-input'
					placeholder='Телефон номер'
				/>
				<input type='text' className='modal-input' placeholder='Пароль' />
				<input
					type='text'
					className='modal-input'
					placeholder='Повторите пароль'
				/>

				<button className='modal-btn' onClick={() => setModalFlag(false)}>
					Зарегистирироваться
				</button>
				<p className='modal-footer' onClick={() => setModal('login')}>
					Авторизоваться
				</p>
			</div>
		</div>
	)
}

export default RegisterModal
