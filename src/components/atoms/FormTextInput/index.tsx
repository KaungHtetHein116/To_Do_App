import { StyleProp, TextInput, View, ViewStyle } from 'react-native'
import React from 'react'
import formTextInputStyles from './formTextInput.styles'
import { useController } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import Typography from '../Typography'
import { gutters } from '@/theme'

interface IFormTextInput extends React.ComponentProps<typeof TextInput> {
	name: string
	control: any
	defaultValue?: string
	containerStyle?: StyleProp<ViewStyle>
}

const FormTextInput = ({
	name,
	control,
	defaultValue,
	containerStyle,
	style,
	...props
}: IFormTextInput) => {
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
			<Typography
				variant="body3"
				style={gutters.regularTMargin}
				color="rustyRed"
			>
				{message}
			</Typography>
		)
	}

	return (
		<View style={containerStyle}>
			<TextInput
				placeholder="Enter here"
				multiline
				style={[formTextInputStyles.textInput, style]}
				onChangeText={onChange}
				value={value}
				ref={ref}
				{...props}
			/>
			<ErrorMessage
				name={name}
				errors={errors}
				render={renderErrorMessage}
			/>
		</View>
	)
}

export default FormTextInput
