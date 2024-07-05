import { TextInput } from 'react-native'
import React from 'react'
import baseTextInputStyles from './formTextInput.styles'
import { useController } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import Typography from '../Typography'
import { gutters } from '@/theme'

const BaseTextInput = ({
	name,
	control,
	defaultValue,
}: {
	name: string
	control: any
	defaultValue?: string | null
}) => {
	const {
		field: { onChange, value, ref },
		formState: { errors },
	} = useController({
		name,
		control,
		defaultValue,
	})

	const renderErrorMessage = ({ message }: { message: string }) => {
		return (
			<Typography variant="error" style={gutters.regularTMargin}>
				{message}
			</Typography>
		)
	}

	return (
		<>
			<TextInput
				placeholder="Enter here"
				multiline
				style={baseTextInputStyles.textInput}
				onChangeText={onChange}
				value={value}
				ref={ref}
			/>
			<ErrorMessage
				name={name}
				errors={errors}
				render={renderErrorMessage}
			/>
		</>
	)
}

export default BaseTextInput
