import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { INavItem } from '../types'
import styles from './NavItem.module.scss'

const NavItem: FC<INavItem> = ({ text, link }) => {
	return (
		<NavLink to={link} className={styles.link}>
			{text}
		</NavLink>
	)
}

export default NavItem
