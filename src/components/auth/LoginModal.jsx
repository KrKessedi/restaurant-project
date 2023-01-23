import React from 'react'

const LoginModal = () => {
	return (
		<div className='modal-container'>
			<div className='modal-block'>
				<h3 className='modal-title'>Вход на сайт</h3>
				<span className='modal-text'>Присоединяйтесь,</span>
				<span className='modal-text modal-text-bold'>
					это не займёт много времени!
				</span>
				<input
					type='text'
					className='modal-input'
					placeholder='Имя / Телефон номер'
				/>
				<input type='text' className='modal-input' placeholder='Пароль' />
				<p className='underline text-[#D14019] font-montserrat font-medium text-lg mb-6'>
					Забыли пароль?
				</p>
				<button className='modal-btn'>Авторизоваться</button>
				<p className='modal-footer'>Зарегистирироваться</p>
			</div>
		</div>
	)
}

export default LoginModal
