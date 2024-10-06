import '@/styles/global.scss'
import { FC } from 'react'
import { Provider } from 'react-redux'
import AppRoutes from './routes'
import store from './store'

const App: FC = () => {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	)
}

export default App
