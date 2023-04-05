import { useEffect } from 'react'
import MainRoutes from './MainRoutes'
import { getDishes } from './store/apiCalls'
import { useDispatch } from 'react-redux'

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
