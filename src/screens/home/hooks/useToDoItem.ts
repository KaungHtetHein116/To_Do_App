import { useDeleteTodo, useUpdateTodo } from '@/api/hooks/useToDos'
import { navigate } from '@/navigators/utils/navigator'
import { useCallback } from 'react'

const useToDoItem = ({
	id,
	isCompleted,
}: {
	id: string
	isCompleted?: boolean
}) => {
	const { mutate: updateTodo } = useUpdateTodo()
	const { mutate: deleteTodo } = useDeleteTodo()

	const onPressCheckIcon = useCallback(() => {
		updateTodo({
			id,
			isCompleted: !isCompleted,
		})
	}, [id, isCompleted])

	const onPressEdit = useCallback(() => {
		navigate('DETAIL', { id })
	}, [id])

	const onPressDelete = useCallback(() => {
		deleteTodo(id)
	}, [id])

	return {
		onPressCheckIcon,
		onPressEdit,
		onPressDelete,
	}
}

export default useToDoItem
