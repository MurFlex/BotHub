import cn from 'classnames'
import { FC } from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({
    children,
    className,
    isLoading = false,
    appearance = 'default',
    ...props
}) => (
    <button
        className={cn(
            styles['button'],
            styles[appearance],
            {
                [styles['loading']]: isLoading // TODO: Добавить лоадер после выполнения BH-8
            },
            className
        )}
        {...props}
    >
        {children}
    </button>
)

export default Button
