import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import { errorHandler } from './middleware/error.middleware'
import prisma from './prisma'
import AuthRoutes from './routes/AuthRoutes'

dotenv.config()

const app: Express = express()

async function main() {
	const port = process.env.PORT || 3000

	app.use(cookieParser())
	app.use(express.json())
	app.use(errorHandler)

	app.use('/auth/', AuthRoutes)

	app.get('/health-check/', (req: Request, res: Response) => {
		res.send('Heathy!')
	})

	app.listen(port, () => {
		console.log(`[server]: Server is running at http://localhost:${port}`)
	})
}

main()
	// TODO: Uncomment when first migration ready
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
