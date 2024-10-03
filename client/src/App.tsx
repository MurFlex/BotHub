import { FC } from 'react'
import { Provider } from 'react-redux';
import AppRoutes from './routes'
import store from './store'
import { loadStore } from './store/storeLoader'

const App: FC = () => {
	loadStore()

	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	)
}

export default App
