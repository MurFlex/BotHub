import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApiService from '../../../../service/ApiService/ApiService.ts'
import Button from '../../../base/Button/Button.tsx'
import Input from '../../../base/Input/Input.tsx'
import useRegister from '../hooks/useRegister.tsx'
import { IFormValues } from '../types.ts'
import styles from './Form.module.scss'

const RegisterForm: FC = () => {
    const [values, setValues] = useState<IFormValues>({
        email: '',
        password: ''
    })

    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)

    const { register } = useRegister()
    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { email, password } = values
        register(email, password)
    }

    const checkEmail = async () => {
        const { email } = values

        const isEmailFree = await ApiService.auth.checkEmail(email)

        if (isEmailFree) {
            setIsEmailValid(true)
            setValues({ ...values, password: '' })
        } else {
            navigate('/auth/login')
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Попробуйте BotHub бесплатно</h2>
                <p className={styles.hint}>
					Уже зарегистрированы? <Link to={'/login'}>Войти</Link>
                </p>
                {isEmailValid ? (
                    <Input
                        text={'Введите пароль'}
                        name={'password'}
                        placeholder={'Пароль'}
                        value={values.password}
                        onChange={handleChange}
                    />
                ) : (
                    <Input
                        text={'Введите email'}
                        name={'email'}
                        placeholder={'Email'}
                        value={values.email}
                        onChange={handleChange}
                    />
                )}
                {isEmailValid ? (
                    <Button appearance={'accent'} type={'submit'}>
						Зарегистрироваться
                    </Button>
                ) : (
                    <Button appearance={'accent'} type={'button'} onClick={checkEmail}>
						Продолжить
                    </Button>
                )}
            </form>
            <img src='/login.png' alt='Собака' />
        </div>
    )
}

export default RegisterForm
