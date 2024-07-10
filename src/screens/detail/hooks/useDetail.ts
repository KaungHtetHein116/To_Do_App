import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'

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
	const title = useMemo(() => (id ? 'Update' : 'Create'), [])

	const defaultValue = {}

	const [colorTag, setColorTag] = useState()

	const onPressSave = handleSubmit(values => {
		const { description, title } = values
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
