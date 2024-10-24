import { Joi, Segments } from 'celebrate';

const config = {
    passwordMin: 6
}

enum errorMessages {
    EMAIL = 'Почта не соответствует формату',
    PASSWORD = 'Пароль должен состоять минимум из 6 символов'
}

export const checkEmailValidation = {
    [Segments.QUERY]: Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': errorMessages.EMAIL,
            'any.required': 'Поле email обязательно',
        }),
    }),
};

export const authValidation = {
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required().messages({
            'string.email': errorMessages.EMAIL,
            'any.required': 'Поле email обязательно'
        }),
        password: Joi.string().min(config.passwordMin).required().messages({
            'string.min': errorMessages.PASSWORD,
            'any.required': 'Поле пароль обязательно'
        }),
    }),
};
