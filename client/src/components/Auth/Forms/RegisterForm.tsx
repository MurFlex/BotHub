import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import ApiService from '../../../service/ApiService/ApiService.ts'
import Button from '../../Button/Button.tsx'
import Input from '../../Input/Input.tsx'
import useRegister from '../hooks/useRegister.tsx'
import { IFormValues } from '../types.ts'
import styles from './Form.module.scss'

const RegisterForm: FC = () => {
	const [values, setValues] = useState<IFormValues>({
		email: '',
		password: '',
	})

	const [isEmailValid, setIsEmailValid] = useState<boolean>(false)

	const { register } = useRegister()

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
			// Если email занят, перенаправляем пользователя на страницу логина
			// Это можно сделать через useNavigate хук
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
						value={values.password} // Привязываем значение к состоянию
						onChange={handleChange}
					/>
				) : (
					<Input
						text={'Введите email'}
						name={'email'}
						placeholder={'Email'}
						value={values.email} // Привязываем значение к состоянию
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
