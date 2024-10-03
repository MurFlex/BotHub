import { FC } from "react";
import { IMenuItemProps } from "./MenuItem.props.ts";
import styles from './MenuItem.module.scss'
import { NavLink } from "react-router-dom";

export const MenuItem: FC<IMenuItemProps> = ({item}) => {
    return (
        <li className={styles.list}>
            <NavLink to={item.value} className={styles.nivLink}>{item.label}</NavLink>
        </li>
    );
};