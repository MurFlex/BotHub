import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../base/Button/Button.tsx'
import Input from '../../../base/Input/Input.tsx'
import useLogin from '../hooks/useLogin.tsx'
import { IFormValues } from '../types.ts'
import styles from './Form.module.scss'

const LoginForm: FC = () => {
    const [values, setValues] = useState<IFormValues>({
        email: '',
        password: ''
    })

    const { login } = useLogin()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { email, password } = values
        login(email, password)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Рады видеть вас снова!</h2>
                <p className={styles.hint}>
					Нет аккаунта? <Link to={'/register'}>Зарегистрироваться</Link>
                </p>
                <Input
                    text={'Введите email'}
                    name={'email'}
                    placeholder={'Email'}
                    onChange={handleChange}
                />
                <div>
                    <Input
                        text={'Введите пароль'}
                        name={'password'}
                        placeholder={'Пароль'}
                        onChange={handleChange}
                    />
                    <span className={styles.hint}>
						Забыли пароль? <Link to={'forgot_password'}>Восстановить</Link>
                    </span>
                </div>
                <Button appearance={'accent'} type={'submit'}>
					Вход
                </Button>
            </form>
            <img src='/login.png' alt='Собака' />
        </div>
    )
}

export default LoginForm
