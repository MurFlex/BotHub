import prisma from '../prisma'

export abstract class AbstractModel {
	protected prisma: any

	constructor() {
		this.prisma = prisma
	}
}
