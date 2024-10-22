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
                <DropdownMenu label={'Возможности'} items={[]} />
                <DropdownMenu label={'Цены'} items={[]} />
                <DropdownMenu label={'Услуги'} items={[]} />
                <DropdownMenu label={'Полезное'} items={[]} />
                <DropdownMenu label={'О нас'} items={[]} />
                <DropdownMenu label={'Блог'} items={[]} />
                <DropdownMenu label={'Школа'} items={[]} />
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