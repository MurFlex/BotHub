import { FC } from 'react'
import Header from '../../components/cabinet/Header/Header'
import Sidebar from '../../components/cabinet/Sidebar/Sidebar'
import styles from './CabinetLayout.module.scss'
import { CabinetLayoutProps } from './CabinetLayout.props'

const CabinetLayout: FC<CabinetLayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.content}>
				<Header />
				{children}
			</div>
		</div>
	)
}

export default CabinetLayout
