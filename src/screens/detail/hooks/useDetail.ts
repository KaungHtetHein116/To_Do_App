import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '@/store/toDo'
import { useNavigation } from '@react-navigation/native'
import { useToDo } from '@/store/hooks'
import { useEffect, useMemo } from 'react'
import { IToDoItem } from '@/store/toDo/types'

const resolver = yupResolver(
	Yup.object().shape({
		title: Yup.string()
			.required('Please enter title.')
			.min(5, 'Title must be at least 5 characters long.')
			.trim(),
		description: Yup.string()
			.required('Please enter description.')
			.min(5, 'Description must be at least 5 characters long.')
			.trim(),
		color: Yup.string().required('Please select a color.'),
	}),
)

const useDetail = ({ id }: { id?: string }) => {
	const {
		reset,
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm({ resolver })
	const navigation = useNavigation()
	const dispatch = useDispatch()
	const { toDolist } = useToDo()
	const title = useMemo(() => (id ? 'Update' : 'Create'), [])

	const defaultValue = useMemo(
		() =>
			id
				? toDolist.find(value => value.id === id)
				: { title: '', description: '', color: '#FBFEFB' },
		[id],
	) as IToDoItem

	const onPressSave = handleSubmit(values => {
		const { description, title, color } = values
		dispatch(
			id
				? updateTodo({ id, description, color, title })
				: addTodo({ color, description, title }),
		)
		navigation.goBack()
	})

	useEffect(() => {
		if (id) reset(defaultValue)
	}, [id])

	return {
		control,
		defaultValue,
		isDirty,
		onPressSave,
		title,
	}
}

export default useDetail
