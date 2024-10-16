import {FormEvent, ChangeEvent } from 'react'

export interface FormProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}