import { FC, InputHTMLAttributes } from "react";

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({text, name, placeholder}) => {
  return (
    <label className={styles.label}>
    <p className={styles.p}> {text} </p>
    <input className={styles.input} name={name} placeholder={placeholder}/>
    </label>
  );
};

export default Input