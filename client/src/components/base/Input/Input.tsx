import { FC } from "react";

import styles from './Input.module.scss';
import { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({text, name, ...props}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>{text}</label>
      <input id={name} className={styles.input} name={name} {...props}/>
    </div>
  );
};

export default Input