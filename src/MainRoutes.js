import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PasswordRecovery from './pages/PasswordRecovery'

const MainRoutes = () => {
	const routes = [
		{ id: 1, element: <HomePage />, path: '/' },
		{ id: 2, element: <PasswordRecovery />, path: '/recovery' },
	]
	return (
		<Routes>
			{routes?.map(item => (
				<Route key={item.id} path={item.path} element={item.element} />
			))}
		</Routes>
	)
}

export default MainRoutes
