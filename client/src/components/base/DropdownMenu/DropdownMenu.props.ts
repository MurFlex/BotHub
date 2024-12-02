import { HTMLAttributes, ReactNode } from 'react'
import { IItem } from './MenuItem/types'

export interface IDropdownMenuProps extends HTMLAttributes<HTMLElement> {
    label: ReactNode;
    items: IItem[];
}
