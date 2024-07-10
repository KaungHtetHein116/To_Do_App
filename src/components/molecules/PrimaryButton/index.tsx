import {
	ActivityIndicator,
	StyleProp,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native'
import React from 'react'
import { Typography } from '@/components'
import primaryButtonStyles from './primaryButton.styles'
import commonStyles from '@/theme/commonStyles'

interface IPrimaryButton extends React.ComponentProps<typeof TouchableOpacity> {
	label: string
	labelStyle?: StyleProp<TextStyle>
	style?: StyleProp<ViewStyle>
	isLoading?: boolean
}

const PrimaryButton = ({
	label,
	labelStyle,
	style,
	disabled,
	isLoading,
	...props
}: IPrimaryButton) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={[
				commonStyles.center,
				primaryButtonStyles.container,
				style,
				disabled && primaryButtonStyles.disabledStyle,
			]}
			disabled={disabled || isLoading}
			{...props}
		>
			{isLoading ? (
				<ActivityIndicator color={'white'} />
			) : (
				<Typography style={labelStyle}>{label}</Typography>
			)}
		</TouchableOpacity>
	)
}

export default PrimaryButton
