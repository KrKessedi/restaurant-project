import React, { useState } from 'react'

import Confirmation from './Confirmation'
import LoginModal from './LoginModal'
import NewPassword from './NewPassword'
import PasswordRecovery from './PasswordRecovery'
import RegisterModal from './RegisterModal'

const AuthModal = ({ setModalFlag }) => {
	const [modal, setModal] = useState('login')
	let modals = [
		{
			id: 'login',
			modal: (
				<LoginModal
					key='login'
					setModal={setModal}
					setModalFlag={setModalFlag}
				/>
			),
		},
		{
			id: 'register',
			modal: (
				<RegisterModal
					key='register'
					setModal={setModal}
					setModalFlag={setModalFlag}
				/>
			),
		},
		{
			id: 'passwordRecovery',
			modal: (
				<PasswordRecovery
					key='passwordRecovery'
					setModal={setModal}
					setModalFlag={setModalFlag}
				/>
			),
		},
		{
			id: 'confirmation',
			modal: (
				<Confirmation
					key='confirmation'
					setModal={setModal}
					setModalFlag={setModalFlag}
				/>
			),
		},
		{
			id: 'newPassword',
			modal: (
				<NewPassword
					key='newPassword'
					setModal={setModal}
					setModalFlag={setModalFlag}
				/>
			),
		},
	]
	return <>{modals.map(item => (item.id === modal ? item.modal : null))}</>
}

export default AuthModal
