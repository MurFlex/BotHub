import { HTMLAttributes, ReactNode } from "react";

export interface IMenuItemProps extends HTMLAttributes<HTMLDivElement> {
    item: IItem;
}

export interface IItem {
    label: string;
    value: string
}