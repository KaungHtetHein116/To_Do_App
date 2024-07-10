import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'
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
	}),
)

const useDetail = ({ id }: { id?: string }) => {
	const [colorTag, setColorTag] = useState('#FBFEFB')
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
		const { description, title } = values

		if (id) {
			// update
			updateTodo(
				{ id, color: colorTag, ...values },
				{
					onSuccess,
				},
			)
		} else {
			// create
			addTodo(
				{ title, description, color: colorTag },
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
			setColorTag(data.color)
			reset(data)
		}
	}, [data])

	return {
		control,
		isDirty,
		onPressSave,
		colorTag,
		setColorTag,
		title,
		isLoading,
		isSaving: isAddLoading || isUpdateLoading,
	}
}

export default useDetail
