export interface IToDoItem {
	id: string
	title: string
	description: string
	isCompleted: boolean
	color: string
}

export interface IBaseResponse<TResponse> {
	data: TResponse
}
