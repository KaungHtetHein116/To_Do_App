import { navigate } from '@/navigators/utils/navigator'
import { useCallback } from 'react'

const useToDoItem = ({ id }: { id: string }) => {
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
