import {FC, FormEvent, useState, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'
import ApiService from '../../service/ApiService/ApiService'
import { RootState } from '../../store'
import styles from './Auth.module.scss'
import FormRegister from "./Forms/FormRegister.tsx";
import FormLogin from "./Forms/FormLogin.tsx";

interface IFormValues {
	email: string,
	password: string,
}

const Login: FC = () => {
	const dispatch = useDispatch()
	const isRegister = useLocation().pathname === '/register';

	const [values,setValues] = useState<IFormValues>({
		email : "",
		password : "",
	});

	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	)

	useEffect(() => {
		const loginUser = async () => {
			try {
				await ApiService.auth.login()
			} catch (error) {
				console.error('Auth failed:', error)
			}
		}

		loginUser()
	}, [dispatch])

	if (isAuthenticated) {
		return <Navigate to='/cabinet' />
	}

	const register = (event : FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(values)
	}

	const login = (event : FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(values)
	}

	const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
		setValues({...values, [event.target.name]: event.target.value});
	}

	return <div className={styles.content}>
		<header className={styles.header}>
			<div className={styles.logo}>BotHub</div>
			<div className={styles.number}>
				<a href='tel:88888888888'>8 (888) 888-88-88</a>
			</div>
		</header>
		{isRegister
			? <FormRegister onSubmit={register} handleChange={handleChange} />
			: <FormLogin onSubmit={login} handleChange={handleChange} />
		}


	</div>
}

export default Login
