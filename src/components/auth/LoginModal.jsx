import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/apiCalls'

const LoginModal = ({ setModal, setModalFlag }) => {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const error = useSelector((state) => state.user.error)
	const dispatch = useDispatch()
	const handleClick = (e) => {
		e.preventDefault()
		if (!email.trim() || !password.trim()) {
			alert('Some inputs are empty!')
			return
		}
		login(dispatch, { email, password })
		!error && setModalFlag(false)
	}
	return (
		<div className='modal-container' onClick={() => setModalFlag(false)}>
			<div
				className='modal-block'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<h3 className='modal-title'>Вход на сайт</h3>
				<span className='modal-text'>Присоединяйтесь,</span>
				<span className='modal-text modal-text-bold'>
					это не займёт много времени!
				</span>
				<form action='login' className='modal-form'>
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
					<p
						className='underline text-[#D14019] font-montserrat font-medium text-lg mb-6 cursor-pointer 3sm:text-base 4sm:text-[3vw] 4sm:mb-[4vw]'
						onClick={() => setModal('passwordRecovery')}
					>
						Забыли пароль?
					</p>
					<button className='modal-btn' onClick={handleClick}>
						Авторизоваться
					</button>
				</form>
				<p className='modal-footer' onClick={() => setModal('register')}>
					Зарегистирироваться
				</p>
			</div>
		</div>
	)
}

export default LoginModal
