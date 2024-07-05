export interface IInitialToDoState {
	toDolist: IToDoItem[]
}

export interface IToDoItem {
	id: string
	description: string
	isCompleted: boolean
}
