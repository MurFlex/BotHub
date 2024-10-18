import {
	IUser,
	IUserCreate,
	IUserResponse,
	IUserUpdate,
} from '../types/user.interface'
import { AbstractModel } from './AbstractModel'

class UserModel extends AbstractModel {
	private model = this.prisma.user

	public formatUserForResponse(user: IUser): IUserResponse {
		const { password, createdAt, updatedAt, refresh_token, ...formattedUser } =
			user

		return formattedUser
	}

	public async getUserById(id: Number): Promise<IUser | null> {
		return await this.model.findFirst({
			where: {
				id,
			},
		})
	}

	public async getUserByEmail(email: string): Promise<IUser | null> {
		return await this.model.findFirst({
			where: {
				email,
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
