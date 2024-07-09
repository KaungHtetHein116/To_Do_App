import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialToDoState } from './types'

const initialState: IInitialToDoState = {
	toDolist: [],
}

const toDoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (
			state,
			{
				payload: { title, description, color },
			}: PayloadAction<{
				title: string
				description: string
				color: string
			}>,
		) => {
			state.toDolist.unshift({
				id: new Date().toISOString(),
				description,
				isCompleted: false,
				title,
				color,
			})
		},
		removeTodo: (
			state,
			{ payload: { id } }: PayloadAction<{ id: string }>,
		) => {
			state.toDolist = state.toDolist.filter(todo => todo.id !== id)
		},
		toggleTodo: (
			state,
			{ payload: { id } }: PayloadAction<{ id: string }>,
		) => {
			const todo = state.toDolist.find(todo => todo.id === id)
			if (todo) {
				todo.isCompleted = !todo.isCompleted
			}
		},
		updateTodo: (
			state,
			action: PayloadAction<{
				id: string
				title: string
				description: string
				color: string
			}>,
		) => {
			const { id, description, title, color } = action.payload
			const todo = state.toDolist.find(todo => todo.id === id)
			if (todo) {
				todo.description = description
				todo.title = title
				todo.color = color
			}
		},
		clearTodos: state => {
			state.toDolist = []
		},
	},
})

export const { addTodo, removeTodo, toggleTodo, updateTodo, clearTodos } =
	toDoSlice.actions

export default toDoSlice.reducer
