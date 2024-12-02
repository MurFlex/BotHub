import { FC } from 'react'

import styles from './DropdownMenu.module.scss'
import { IDropdownMenuProps } from './DropdownMenu.props.ts'
import { MenuItem } from './MenuItem/MenuItem.tsx'
import { IItem } from './MenuItem/types.ts'

const DropdownMenu: FC<IDropdownMenuProps> = ({ label, items }) => (
    <div className={styles.dropdown}>
        <span className={styles.dropdown__label}>{label}</span>
        <div className={styles.dropdown__padding}>
            <ul className={styles.dropdown__list}>
                {items.map((item: IItem) => (
                    <MenuItem item={item} />
                ))}
            </ul>
        </div>
    </div>
)

export default DropdownMenu
