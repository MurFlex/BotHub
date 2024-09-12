import { FC } from 'react'

export interface ButtonProps extends HTMLButtonElement {
	label: string
	onClick: () => void
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
	return <button onClick={onClick}> {label} </button>
}
