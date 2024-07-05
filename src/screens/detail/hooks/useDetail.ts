import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '@/store/toDo'
import { useNavigation } from '@react-navigation/native'
import { useToDo } from '@/store/hooks'
import { useMemo } from 'react'

const resolver = yupResolver(
	Yup.object().shape({
		toDo: Yup.string()
			.required('Please enter your description.')
			.min(5, 'Your description must be at least 5 characters long')
			.trim(),
	}),
)

const useDetail = ({ id }: { id?: string }) => {
	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm({ resolver })
	const { toDolist } = useToDo()
	const navigation = useNavigation()

	const defaultValue = useMemo(
		() =>
			id ? toDolist.find(value => value.id === id)?.description : null,
		[id],
	)

	const dispatch = useDispatch()

	const onPressSave = handleSubmit(values => {
		dispatch(
			id
				? updateTodo({ id, description: values.toDo })
				: addTodo({ description: values.toDo }),
		)

		navigation.goBack()
	})

	return {
		control,
		defaultValue,
		isDirty,
		onPressSave,
	}
}

export default useDetail
