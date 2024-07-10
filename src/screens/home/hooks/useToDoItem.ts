import { navigate } from '@/navigators/utils/navigator'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const useToDoItem = ({ id }: { id: string }) => {
	const dispatch = useDispatch()

	const onPressCheckIcon = useCallback(() => {}, [id])

	const onPressEdit = useCallback(() => {
		navigate('DETAIL', { id })
	}, [id])

	const onPressDelete = useCallback(() => {}, [id])

	return {
		onPressCheckIcon,
		onPressEdit,
		onPressDelete,
	}
}

export default useToDoItem
