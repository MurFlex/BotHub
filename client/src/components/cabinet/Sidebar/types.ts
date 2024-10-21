export interface INavList {
	items: INavItem[]
}

export interface INavItem {
	icon: string
	text?: string | undefined
	link: string
}
