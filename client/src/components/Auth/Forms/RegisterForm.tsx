import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
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

	const { register } = useRegister()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const { email, password } = values
		register(email, password)
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
				<Input
					text={'Введите email'}
					name={'email'}
					placeholder={'Email'}
					onChange={handleChange}
				/>
				<Button appearance={'accent'} type={'submit'}>
					Вход
				</Button>
			</form>
			<img src='/login.png' alt='Собака' />
		</div>
	)
}

export default RegisterForm
