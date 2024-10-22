import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import authMiddleware from './middleware/auth.middleware'
import { errorHandler, notFound } from './middleware/error.middleware'
import prisma from './prisma'
import AuthRoutes from './routes/AuthRoutes'
import UserRoutes from "./routes/UserRoutes";

dotenv.config()

const app: Express = express()

async function main() {
	const port = process.env.PORT || 3000

	app.use(cookieParser())
	app.use(express.json())

	app.use('/auth/', AuthRoutes)

	app.use('/cabinet/', authMiddleware, UserRoutes)

	app.use(notFound)
	app.use(errorHandler)

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
