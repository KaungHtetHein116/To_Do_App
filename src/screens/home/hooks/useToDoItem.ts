import { navigate } from '@/navigators/utils/navigator'
import { useDeleteToDoMutation, useUpdateToDoMutation } from '@/services/toDos'
import { useCallback } from 'react'

const useToDoItem = ({
	id,
	isCompleted,
}: {
	id: string
	isCompleted?: boolean
}) => {
	const [deleteToDo] = useDeleteToDoMutation()
	const [updateToDo] = useUpdateToDoMutation()

	const onPressCheckIcon = useCallback(() => {
		updateToDo({ isCompleted: !isCompleted, id })
	}, [id, isCompleted])

	const onPressEdit = useCallback(() => {
		navigate('DETAIL', { id })
	}, [id])

	const onPressDelete = useCallback(() => {
		deleteToDo(id)
	}, [id])

	return {
		onPressCheckIcon,
		onPressEdit,
		onPressDelete,
	}
}

export default useToDoItem
