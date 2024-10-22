import {FC, Suspense, useEffect} from 'react'
import Header from '../../components/cabinet/Header/Header'
import Sidebar from '../../components/cabinet/Sidebar/Sidebar'
import styles from './CabinetLayout.module.scss'
import { CabinetLayoutProps } from './CabinetLayout.props'
import {useDispatch} from "react-redux";
import {fetchUserDataThunk} from "../../store/auth/authThunks";
import {AppDispatch} from "../../store";


const CabinetLayout: FC<CabinetLayoutProps> = ({ children }) => {
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUserDataThunk())
	}, [dispatch])

	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.wrap}>
				<Header />
				<div className={styles.content}>
					<Suspense fallback={<div>Загрузка</div>}>{children}</Suspense>
				</div>
			</div>
		</div>
	)
}

export default CabinetLayout
