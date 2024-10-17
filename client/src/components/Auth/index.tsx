import { useLocation } from 'react-router-dom'
import LoginForm from './Forms/LoginForm'
import RegisterForm from './Forms/RegisterForm'

const Auth = () => {
	const isLogin = useLocation().pathname === '/login'

	return <>{isLogin ? <LoginForm /> : <RegisterForm />}</>
}

export default Auth
