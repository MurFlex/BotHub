import { Response } from 'express'

export abstract class AbstractController {
	protected sendSuccess(res: Response, data: any): Response {
		return res.status(200).json(data)
	}

	protected sendError(res: Response, error: string): Response {
		return res.status(500).json({ error })
	}
}
