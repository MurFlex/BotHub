import { FC, Suspense } from 'react'
import Header from '../../components/cabinet/Header/Header'
import Sidebar from '../../components/cabinet/Sidebar/Sidebar'
import styles from './CabinetLayout.module.scss'
import { CabinetLayoutProps } from './CabinetLayout.props'

const CabinetLayout: FC<CabinetLayoutProps> = ({ children }) => {
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
