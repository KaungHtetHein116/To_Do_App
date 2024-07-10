import apiClient from './index'
import { ITodo } from './types'

const getToDos = async () => {
	const { data } = await apiClient.get<{ todos: ITodo[] }>('/todos')
	return data.todos
}

const getToDo = async (id?: string) => {
	const { data } = await apiClient.get<{ todo: ITodo }>(`/todos/${id}`)
	return data.todo
}

const addToDo = async (todo: Partial<ITodo>) => {
	const { data } = await apiClient.post<{ todo: ITodo }>('/todos', todo)
	return data.todo
}

const updateTodo = async (todo: Partial<ITodo>) => {
	const { data } = await apiClient.put<{ todo: ITodo }>(
		`/todos/${todo.id}`,
		todo,
	)
	return data.todo
}

const deleteTodo = async (id: string) => {
	await apiClient.delete(`/todos/${id}`)
}

const deleteAllTodo = async () => {
	await apiClient.delete(`/todos`)
}

export { getToDos, getToDo, addToDo, updateTodo, deleteTodo, deleteAllTodo }
