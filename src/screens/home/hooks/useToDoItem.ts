import { navigate } from '@/navigators/utils/navigator'
import { removeTodo, toggleTodo } from '@/store/toDo'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const useToDoItem = ({ id }: { id: string }) => {
	const dispatch = useDispatch()

	const onPressCheckIcon = useCallback(() => {
		dispatch(toggleTodo({ id }))
	}, [id])

	const onPressEdit = useCallback(() => {
		navigate('DETAIL', { id })
	}, [id])

	const onPressDelete = useCallback(() => {
		dispatch(removeTodo({ id }))
	}, [id])

	return {
		onPressCheckIcon,
		onPressEdit,
		onPressDelete,
	}
}

export default useToDoItem
