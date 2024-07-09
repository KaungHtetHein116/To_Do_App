import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '@/store/toDo'
import { useNavigation } from '@react-navigation/native'
import { useToDo } from '@/store/hooks'
import { useMemo, useState } from 'react'
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
	}),
)

const useDetail = ({ id }: { id?: string }) => {
	const {
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

	const [colorTag, setColorTag] = useState(defaultValue?.color)

	const onPressSave = handleSubmit(values => {
		const { description, title } = values
		dispatch(
			id
				? updateTodo({ id, description, color: colorTag, title })
				: addTodo({ color: colorTag, description, title }),
		)
		navigation.goBack()
	})

	return {
		control,
		defaultValue,
		isDirty,
		onPressSave,
		colorTag,
		setColorTag,
		title,
	}
}

export default useDetail
