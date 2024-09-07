import { Response } from 'express'

export abstract class AbstractController {
	// TODO: Проработать общие методы, возможно вынести куда-то все возможные ошибки в enum и кидать их как дату
	protected sendSuccess(res: Response, data: any): Response {
		return res.status(200).json(data)
	}

	protected sendError(res: Response, error: string): Response {
		return res.status(500).json({ error })
	}
}
