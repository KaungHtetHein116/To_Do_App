import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ITodo } from '../axios/types'
import {
	addToDo,
	deleteAllTodo,
	deleteTodo,
	getToDo,
	getToDos,
	updateTodo,
} from '../axios/toDos'

export const useTodos = () => {
	return useQuery({
		queryKey: ['todos'],
		queryFn: getToDos,
	})
}

export const useTodo = (id?: string) => {
	return useQuery({
		queryKey: ['todos', id],
		queryFn: () => getToDo(id),
		enabled: !!id,
	})
}

export const useAddTodo = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (todo: Partial<ITodo>) => addToDo(todo),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
	})
}

export const useUpdateTodo = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (todo: Partial<ITodo>) => updateTodo(todo),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
	})
}

export const useDeleteTodo = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: string) => deleteTodo(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
	})
}

export const useDeleteAllTodo = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: deleteAllTodo,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
	})
}
