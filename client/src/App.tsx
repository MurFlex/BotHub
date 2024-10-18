import { FC } from 'react'
import { Provider } from 'react-redux'
import SvgSprite from './components/shared/SvgSprite/SvgSprite'
import AppRoutes from './routes'
import store from './store'
import { loadStore } from './store/storeLoader'

const App: FC = () => {
	loadStore()

	return (
		<>
			<SvgSprite />
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		</>
	)
}

export default App
