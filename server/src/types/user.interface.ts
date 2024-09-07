export interface IUser {
	id: Number
	name: string
	email: string
	password: string
	refresh_token?: string
	createdAt: Date
	updatedAt: Date
}

export interface IUserCreate {
	name: string
	email: string
	password: string
}

export interface IUserUpdate extends Omit<IUser, 'createdAt, updatedAt'> {}

export interface IUserSearch {
	id?: number
	email?: string
	name?: string
}
