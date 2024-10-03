import { FC } from "react";

import styles from "./DropdownMenu.module.scss";
import { IDropdownMenuProps } from "./DropdownMenu.props.ts";
import { MenuItem } from "./MenuItem/MenuItem.tsx";
import { IItem } from "./MenuItem/MenuItem.props.ts";

const DropdownMenu: FC<IDropdownMenuProps> = ({ label, items }) => {
  return (
    <div className={styles.dropdown}>
      <p className={styles.dropdown__label}>{label}</p>
      <div className={styles.dropdown__padding}>
      <nav className={styles.dropdown__menu}>
        <ul className={styles.dropdown_list}>
          {items.map((item: IItem) => (
            <MenuItem item={item}></MenuItem>
          ))}
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default DropdownMenu;
