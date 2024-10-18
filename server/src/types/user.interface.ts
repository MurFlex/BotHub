export interface IUser {
	id: Number
	email: string
	password: string
	refresh_token?: string
	createdAt: Date
	updatedAt: Date
}

export interface IUserCreate {
	email: string
	password: string
}

export interface IUserUpdate extends Omit<IUser, 'createdAt, updatedAt'> {}

export interface IUserSearch {
	id?: Number
	email?: string
	name?: string
}

export interface IUserResponse {
	id?: Number
	email?: string
	name?: string
}
