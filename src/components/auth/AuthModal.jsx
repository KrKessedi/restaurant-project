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
			modal: <LoginModal setModal={setModal} setModalFlag={setModalFlag} />,
		},
		{
			id: 'register',
			modal: <RegisterModal setModal={setModal} setModalFlag={setModalFlag} />,
		},
		{
			id: 'passwordRecovery',
			modal: (
				<PasswordRecovery setModal={setModal} setModalFlag={setModalFlag} />
			),
		},
		{
			id: 'confirmation',
			modal: <Confirmation setModal={setModal} setModalFlag={setModalFlag} />,
		},
		{
			id: 'newPassword',
			modal: <NewPassword setModal={setModal} setModalFlag={setModalFlag} />,
		},
	]
	return <>{modals.map((item) => (item.id === modal ? item.modal : null))}</>
}

export default AuthModal
