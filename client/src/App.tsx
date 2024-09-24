import '@/styles/global.scss'
import Button from './components/Button/Button'
import Loader from './components/Loader/Loader'

function App() {
	return (
		<div className='test'>
			<Button appearance='accent'>
				<Loader />
			</Button>
		</div>
	)
}

export default App
