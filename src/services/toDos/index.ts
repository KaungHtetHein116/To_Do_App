import { baseApi } from '../index'
import { IToDoItem } from './types'

export const toDoService = baseApi
	.enhanceEndpoints({
		addTagTypes: ['ToDo'],
	})
	.injectEndpoints({
		endpoints: build => ({
			getToDos: build.query<{ todos: IToDoItem[] }, void>({
				query: () => {
					return {
						url: 'todos',
						method: 'GET',
					}
				},
				providesTags: result =>
					result
						? [
								...result.todos.map(({ id }) => ({
									type: 'ToDo' as const,
									id,
								})),
								{ type: 'ToDo', id: 'LIST' },
						  ]
						: [{ type: 'ToDo', id: 'LIST' }],
			}),
			getToDo: build.query<{ todo: IToDoItem }, string>({
				query: id => {
					return {
						url: `todos/${id}`,
						method: 'GET',
					}
				},
			}),
			addToDo: build.mutation<IToDoItem, Partial<IToDoItem>>({
				query: data => {
					return {
						url: 'todos',
						method: 'POST',
						body: data,
					}
				},
				invalidatesTags: [{ type: 'ToDo', id: 'LIST' }],
			}),
			updateToDo: build.mutation<IToDoItem, Partial<IToDoItem>>({
				query: data => {
					return {
						url: `todos/${data.id}`,
						method: 'PUT',
						body: data,
					}
				},
				invalidatesTags: arg => [{ type: 'ToDo', id: arg?.id }],
			}),
			deleteToDo: build.mutation<IToDoItem, string>({
				query: id => {
					return {
						url: `todos/${id}`,
						method: 'DELETE',
					}
				},
				invalidatesTags: [{ type: 'ToDo', id: 'LIST' }],
			}),
			deleteAllToDo: build.mutation<void, void>({
				query: () => {
					return {
						url: `todos`,
						method: 'DELETE',
					}
				},
				invalidatesTags: [{ type: 'ToDo', id: 'LIST' }],
			}),
		}),
		overrideExisting: true,
	})

export const {
	useGetToDosQuery,
	useAddToDoMutation,
	useUpdateToDoMutation,
	useDeleteToDoMutation,
	useGetToDoQuery,
	useDeleteAllToDoMutation,
} = toDoService
