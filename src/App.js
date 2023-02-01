import { useEffect } from 'react'
import MainRoutes from './MainRoutes'
import { getCategories, getDishes } from './store/apiCalls'
import { useDispatch } from 'react-redux'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		getCategories(dispatch)
		getDishes(dispatch)
	}, [])
	return (
		<>
			<MainRoutes />
		</>
	)
}

export default App
