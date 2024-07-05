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
				payload: { description },
			}: PayloadAction<{ description: string }>,
		) => {
			state.toDolist.push({
				id: new Date().toISOString(),
				description: description,
				isCompleted: false,
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
			action: PayloadAction<{ id: string; description: string }>,
		) => {
			const { id, description } = action.payload
			const todo = state.toDolist.find(todo => todo.id === id)
			if (todo) {
				todo.description = description
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
