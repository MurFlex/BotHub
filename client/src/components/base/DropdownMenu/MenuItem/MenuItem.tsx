import { FC } from 'react'
import { IMenuItemProps } from './types.ts'
import styles from './MenuItem.module.scss'
import { Link } from 'react-router-dom'

export const MenuItem: FC<IMenuItemProps> = ({ item }) => (
    <li className={styles.list} key={item.link}>
        <Link to={(item.link)} className={styles.link}>{item.label || ''}</Link>
    </li>
)