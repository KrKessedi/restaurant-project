import MainRoutes from './MainRoutes'
import { useDispatch } from 'react-redux'
import { getDishes } from './store/apiCalls'
import { useEffect } from 'react'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		getDishes(dispatch)
	}, [dispatch])
	return (
		<>
			<MainRoutes />
		</>
	)
}

export default App
