import { FC } from "react";

import styles from './Input.module.scss';
import { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({text, name, placeholder}) => {
  return (
    <label className={styles.label}>
    <p className={styles.p}> {text} </p>
    <input className={styles.input} name={name} placeholder={placeholder}/>
    </label>
  );
};

export default Input