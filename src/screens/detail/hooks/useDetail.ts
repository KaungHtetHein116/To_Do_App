import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useMemo } from 'react'
import { useAddTodo, useTodo, useUpdateTodo } from '@/api/hooks/useToDos'

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
	const { data, isLoading } = useTodo(id)
	const { mutate: addTodo, isPending: isAddLoading } = useAddTodo()
	const { mutate: updateTodo, isPending: isUpdateLoading } = useUpdateTodo()
	const {
		reset,
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm({ resolver })
	const navigation = useNavigation()
	const title = useMemo(() => (id ? 'Update' : 'Create'), [])

	const onPressSave = handleSubmit(values => {
		const { description, title, color } = values

		if (id) {
			// update
			updateTodo(
				{ id, ...values },
				{
					onSuccess,
				},
			)
		} else {
			// create
			addTodo(
				{ title, description, color },
				{
					onSuccess,
				},
			)
		}
	})

	const onSuccess = () => {
		navigation.goBack()
	}

	useEffect(() => {
		if (data) {
			reset(data)
		}
	}, [data])

	return {
		control,
		isDirty,
		onPressSave,
		title,
		isLoading,
		isSaving: isAddLoading || isUpdateLoading,
	}
}

export default useDetail
