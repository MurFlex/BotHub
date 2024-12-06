import { FC, useEffect, useState, useCallback } from 'react'
import cn from 'classnames'

import styles from './Header.module.scss'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import Button from '../Button/Button'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { Link } from 'react-router-dom'

export interface IMenuItem {
    label: string;
    link: string;
  }

export interface IHeaderItem {
    label: string,
    arrInfo: IMenuItem[]
}

const Header: FC = () => {

    const [isScrolled, setScrolled] = useState(false)

    const handleScroll = useCallback(() => {
        if(window.scrollY > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    const headerItems: IHeaderItem[] = [
        { label: 'Возможности', arrInfo: [{ label: '1', link: '/1' }] },
        { label: 'Цены', arrInfo: [{ label: '2', link: '/2' }] },
        { label: 'Услуги', arrInfo: [{ label: '3', link: '/3' }] },
        { label: 'Полезное', arrInfo: [{ label: '4', link: '/4' }] },
        { label: 'О нас', arrInfo: [{ label: '5', link: '/5' }] },
        { label: 'Блог', arrInfo: [{ label: '6', link: '/6' }] },
        { label: 'Школа', arrInfo: [{ label: '7', link: '/7' }] }
    ]

    return (
        <div className={cn(styles.header, isScrolled && styles.header_scrolled)}>
            <div className={cn(styles.container, isScrolled && styles.container_scrolled, styles.main_info)}>
                <div className={styles.main_info}>
                    <span className={styles.label_text}>BotHub</span>
                    <nav className={styles.navigation}>
                        <DropdownMenu label={headerItems[0].label} items={headerItems[0].arrInfo} />
                        <DropdownMenu label={headerItems[1].label} items={headerItems[1].arrInfo} />
                        <DropdownMenu label={headerItems[2].label} items={headerItems[2].arrInfo} />
                        <DropdownMenu label={headerItems[3].label} items={headerItems[3].arrInfo} />
                        <DropdownMenu label={headerItems[4].label} items={headerItems[4].arrInfo} />
                        <DropdownMenu label={headerItems[5].label} items={headerItems[5].arrInfo} />
                        <DropdownMenu label={headerItems[6].label} items={headerItems[6].arrInfo} />
                    </nav>
                </div>
                <div className={styles.buttons_block}>
                    <Link to={'/login'}><Button className={styles.button} appearance='default'>Войти</Button></Link>
                    <Link to={'/register'}><Button className={styles.button} appearance='accent'>Зарегистрироваться</Button></Link>
                </div>
            </div>
            <div className={cn(styles.container, styles.burger_show, isScrolled && styles.container_scrolled)}>
                <span className={styles.label_text}>BotHub</span>
                <nav className={styles.main_info_burger}>
                    <BurgerMenu menuItems={headerItems} />
                </nav>
            </div>
        </div>
    )
}

export default Header