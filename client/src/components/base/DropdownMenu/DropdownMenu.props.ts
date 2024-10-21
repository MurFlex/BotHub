import { HTMLAttributes, ReactNode } from "react";
import { IItem } from "./MenuItem/MenuItem.props";

export interface IDropdownMenuProps extends HTMLAttributes<HTMLElement> {
    label: ReactNode;
    items: IItem[];
}
