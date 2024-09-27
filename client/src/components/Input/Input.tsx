import { FC } from "react";

import styles from './Input.module.scss';
import { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({text, name, placeholder}) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>{text}</label>
      <input id={name} className={styles.input} name={name} placeholder={placeholder} />
    </>
  );
};

export default Input