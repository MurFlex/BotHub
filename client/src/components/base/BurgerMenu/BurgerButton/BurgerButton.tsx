// import { FC } from 'react'

import { FC, useState } from 'react'
import styles from './BurgerButton.module.scss'
import { IHeaderItem } from '../../Header/Header'
import { IItem } from '../../DropdownMenu/MenuItem/MenuItem.props'
import { MenuItem } from '../../DropdownMenu/MenuItem/MenuItem'

interface IBurgerButton {
    item: IHeaderItem
}

const BurgerButton: FC<IBurgerButton> = ({ item }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => setIsOpen(!isOpen)
    const handleMouseLeave = () => setIsOpen(false)

    return (
        <div
            className={styles.accordion_container}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.accordion_header}>
                {item.label}
                <span className={`${styles.accordion_icon} ${isOpen ? styles.open : ''}`}>
                    <svg className={styles.svg}>
                        <use href='#accordion-icon'/>
                    </svg>
                </span>
            </div>
            {isOpen && <div className={styles.accordion_content}>
                <ul>
                    {item.arrInfo.map((item: IItem) => (
                        <MenuItem item={item} key={item.link} />
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default BurgerButton