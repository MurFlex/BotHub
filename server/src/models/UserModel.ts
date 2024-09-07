import { IUser, IUserCreate, IUserUpdate } from '../types/user.interface'
import { AbstractModel } from './AbstractModel'

class UserModel extends AbstractModel {
	private model = this.prisma.user

	public async getUserById(id: Number): Promise<IUser | null> {
		return await this.model.findFirst({
			where: {
				id: id,
			},
		})
	}

	public async getUserByEmail(email: string): Promise<IUser | null> {
		return await this.model.findFirst({
			where: {
				email: email,
			},
		})
	}

	public async createUser(data: IUserCreate): Promise<IUser> {
		return await this.model.create({ data })
	}

	public async updateUser(data: IUserUpdate): Promise<IUser> {
		return await this.model.update({
			where: {
				id: data.id,
			},
			data,
		})
	}
}

export default new UserModel()