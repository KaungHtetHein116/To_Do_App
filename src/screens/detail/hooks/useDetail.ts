import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useMemo } from 'react'
import {
	useAddToDoMutation,
	useGetToDoQuery,
	useUpdateToDoMutation,
} from '@/services/toDos'

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
	const [addToDo, { isLoading: isAdding }] = useAddToDoMutation()
	const [updateToDo, { isLoading: isUpdating }] = useUpdateToDoMutation()
	const { data, isFetching: isToDoLoading } = useGetToDoQuery(id!, {
		skip: Boolean(!id),
	})
	const title = useMemo(() => (id ? 'Update' : 'Create'), [])

	const onPressSave = handleSubmit(async values => {
		id
			? await updateToDo({
					id,
					...values,
			  })
			: await addToDo({
					...values,
			  })

		navigation.goBack()
	})

	useEffect(() => {
		if (data?.todo) reset(data.todo)
	}, [data])

	return {
		control,
		isDirty,
		onPressSave,
		title,
		isLoading: isAdding || isUpdating,
		isToDoLoading,
		data,
	}
}

export default useDetail
