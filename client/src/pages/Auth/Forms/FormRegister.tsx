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
                Попробуйте BotHub бесплатно
            </h2>
            <p className={styles.hint}>
                Уже разегистрированы? <Link to={'/login'}>Войти</Link>
            </p>
            <Input text={'Введите email'} name={'email'} placeholder={'Email'} onChange={handleChange}/>
            <Button appearance={'accent'} type={'submit'}> Вход </Button>
        </form>
        <img src="/login.png" alt="Собака"/>
    </div>
}

export default FormLogin
