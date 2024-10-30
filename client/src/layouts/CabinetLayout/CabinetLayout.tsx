import { FC, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/cabinet/Header/Header'
import Sidebar from '../../components/cabinet/Sidebar/Sidebar'
import { AppDispatch, RootState } from '../../store'
import { fetchUserDataThunk } from '../../store/auth/authThunks'
import styles from './CabinetLayout.module.scss'
import { CabinetLayoutProps } from './CabinetLayout.props'
const CabinetLayout: FC<CabinetLayoutProps> = ({ children }) => {
    const dispatch: AppDispatch = useDispatch()

    const user = useSelector((state: RootState) => state.auth.user)

    useEffect(() => {
        if (!user) {
            dispatch(fetchUserDataThunk())
        }
    }, [dispatch, user])

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
