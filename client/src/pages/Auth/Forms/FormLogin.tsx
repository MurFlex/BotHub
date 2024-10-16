import styles from "./Form.module.scss";
import {Link} from "react-router-dom";
import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";
import {FC} from "react";
import {FormProps} from "./Form.props.ts";

const FormLogin: FC<FormProps> = ({onSubmit, handleChange}) => {
    return  <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.title}>
                Рады видеть вас снова!
            </h2>
            <p className={styles.hint}>
                Нет аккаунта? <Link to={'/register'}>Зарегистрироваться</Link>
            </p>
            <Input text={'Введите email'} name={'email'} placeholder={'Email'} onChange={handleChange}/>
            <div>
                <Input text={'Введите пароль'} name={'password'} placeholder={'Пароль'} onChange={handleChange}/>
                <span className={styles.hint}>Забыли пароль? <Link to={'forgot_password'}>Восстановить</Link></span>
            </div>
            <Button appearance={'accent'} type={'submit'}> Вход </Button>
        </form>
        <img src="/login.png" alt="Собака"/>
    </div>
}

export default FormLogin