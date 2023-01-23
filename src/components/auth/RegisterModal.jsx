import React from 'react'

const RegisterModal = () => {
	return (
		<div className='modal-container'>
			<div className='modal-block'>
				<h3 className='modal-title'>Регистрация</h3>
				<span className='modal-text'>Присоединяйтесь,</span>
				<span className='modal-text modal-text-bold'>
					это не займёт много времени!
				</span>
				{/* <div className='modal-input-block'> */}
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
				{/* </div> */}
				<button className='modal-btn'>Зарегистирироваться</button>
				<p className='modal-footer'>Авторизоваться</p>
			</div>
		</div>
	)
}

export default RegisterModal
