export interface IInitialToDoState {
	toDolist: IToDoItem[]
}

export interface IToDoItem {
	id: string
	title: string
	description: string
	isCompleted: boolean
	color: string
}
