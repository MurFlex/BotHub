import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../../../store'
import { INavItem } from '../types'
import styles from './NavItem.module.scss'

const NavItem: FC<INavItem> = ({ icon, text, link }) => {
	const isTextHidden = useSelector(
		(state: RootState) => state.ui.isSidebarHidden
	)

	return (
		<NavLink to={link} className={styles.link}>
			<svg width='24' height='24'>
				<use href={icon} />
			</svg>
			<span className={isTextHidden ? styles.hiddenText : ''}>{text}</span>
		</NavLink>
	)
}

export default memo(NavItem)
