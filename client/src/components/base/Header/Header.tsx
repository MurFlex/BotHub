import { FC } from 'react';
import { IHeaderProps } from './Header.props';

import styles from './Header.module.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Button from '../Button/Button';

const Header: FC<IHeaderProps> = ({label}) => {
return (
    <div className={styles.header}>
        <div className={styles.main_info}>
            <span className={styles.label_text}>BotHub</span>
            <nav className={styles.navigation}>
                <DropdownMenu label={'Возможности'} items={[{label: '1', link: '/'}]} />
                <DropdownMenu label={'Цены'} items={[{label: '1', link: '/'}]} />
                <DropdownMenu label={'Услуги'} items={[{label: '1', link: '/'}]} />
                <DropdownMenu label={'Полезное'} items={[{label: '1', link: '/'}]} />
                <DropdownMenu label={'О нас'} items={[{label: '1', link: '/'}]} />
                <DropdownMenu label={'Блог'} items={[{label: '1', link: '/'}]} />
                <DropdownMenu label={'Школа'} items={[{label: '1', link: '/'}]} />
            </nav>
        </div>
        <div className={styles.buttons_block}>
            <Button className={styles.button} appearance='default'>Войти</Button>
            <Button className={styles.button} appearance='accent'>Зарегистрироваться</Button>
        </div>
    </div>
);
}

export default Header;