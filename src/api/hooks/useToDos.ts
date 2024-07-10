import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import apiClient, { getToDos } from '../axios'
import { ITodo } from '../axios/types'

// Get all todos
export const useTodos = () => {
	return useQuery<ITodo[]>({
		queryKey: ['todos'],
		queryFn: getToDos,
	})
}

// Get a todo by ID
export const useTodo = id => {
	return useQuery(['todo', id], async () => {
		const { data } = await apiClient.get(`/todos/${id}`)
		return data.todo
	})
}

// Add a new todo
export const useAddTodo = () => {
	const queryClient = useQueryClient()
	return useMutation(
		async newTodo => {
			const { data } = await apiClient.post('/todos', newTodo)
			return data.todo
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('todos')
			},
		},
	)
}

// Update a todo by ID
export const useUpdateTodo = () => {
	const queryClient = useQueryClient()
	return useMutation(
		async ({ id, updatedTodo }) => {
			const { data } = await apiClient.put(`/todos/${id}`, updatedTodo)
			return data.todo
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('todos')
			},
		},
	)
}

// Delete a todo by ID
export const useDeleteTodo = () => {
	const queryClient = useQueryClient()
	return useMutation(
		async id => {
			await apiClient.delete(`/todos/${id}`)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('todos')
			},
		},
	)
}

// Delete all todos
export const useDeleteAllTodos = () => {
	const queryClient = useQueryClient()
	return useMutation(
		async () => {
			await apiClient.delete('/todos')
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('todos')
			},
		},
	)
}
