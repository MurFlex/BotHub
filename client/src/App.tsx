import { FC, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import SvgSprite from './components/shared/SvgSprite/SvgSprite'
import AppRoutes from './routes'
import store from './store'
import { loadStore } from './store/storeLoader'

const App: FC = () => {
	const [isStoreLoaded, setIsStoreLoaded] = useState(false)

	useEffect(() => {
		const initializeStore = async () => {
			await loadStore()
			setIsStoreLoaded(true)
		}

		initializeStore()
	}, [])

	if (!isStoreLoaded) {
		return <div>Загрузка</div> /* TODO: заменить лоадером */
	}

	return (
		<>
			<SvgSprite />
			{/* SvgSprite потом убрать, использовать только там, где он нужен */}
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		</>
	)
}

export default App
