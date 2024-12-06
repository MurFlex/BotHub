import { createContext, FC, useEffect, useState } from 'react'
import styles from './BurgerMenu.module.scss'
import { IHeaderItem } from '../Header/Header'
import Button from '../Button/Button'
import BurgerButton from './BurgerButton/BurgerButton'
import { Link } from 'react-router-dom'

export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenu: () => {}
})

interface IBurgerMenuProps {
    menuItems: IHeaderItem[];
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ menuItems }) => {
    const [isMenuOpen, toggleMenu] = useState<boolean>(false)

    useEffect(() => {
        if (isMenuOpen) {
            // document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = ''
        }
        return () => {
            document.documentElement.style.overflow = ''
        }
    }, [isMenuOpen])

    const toggleMenuMode = () => {
        toggleMenu(!isMenuOpen)
    }

    return (
        <div className={`${styles.burger_menu} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.burger_icon} onClick={toggleMenuMode}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}>
                <ul>
                    {menuItems.map((item:IHeaderItem) => (
                        <li key={item.label}>
                            <BurgerButton  item={item}/>
                        </li>
                    ))}
                    <li><Link to={'/register'}><Button className={styles.button} appearance='accent'>Зарегистрироваться</Button></Link></li>
                    <li><Link to={'/login'}><Button className={styles.button} appearance='default'>Войти</Button></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu
