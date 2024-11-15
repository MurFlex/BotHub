import { Request, Response, NextFunction } from 'express'
import { ValidationError } from 'joi'

export const handleValidationErrors = (
    err: ValidationError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err.isJoi) {
        const errors = err.details.map(error => ({
            field: error.context?.key ?? 'unknown',
            message: error.message
        }))
        return res.status(400).json({ errors })
    }

    next(err)
}
