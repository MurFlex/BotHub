import { celebrate, Joi, Segments } from 'celebrate';
import { Request, Response, NextFunction } from 'express';

export const validationMiddleware = (schema: object) => {
    return celebrate(schema, {
        abortEarly: false
    })
}

export const handleValidationErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.joi) {

        const errors = err.joi.details.map((error: any) => ({
            field: error.context.key,
            message: error.message,
        }));
        return res.status(400).json({ errors });
    }

    next(err);
};