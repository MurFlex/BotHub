import { FC } from 'react'
import NavItem from '../NavItem/NavItem'
import type { INavItem, INavList } from '../types'
import styles from './NavList.module.scss'

const NavList: FC<INavList> = ({ items }) => (
    <nav className={styles.nav}>
        {items.map((item: INavItem) => (
            <NavItem
                key={item.link}
                icon={item.icon}
                text={item.text}
                link={item.link}
            />
        ))}
    </nav>
)

export default NavList
