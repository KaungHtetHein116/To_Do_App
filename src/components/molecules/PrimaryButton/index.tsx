import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { Typography } from '@/components'
import primaryButtonStyles from './primaryButton.styles'
import commonStyles from '@/theme/commonStyles'

interface IPrimaryButton extends React.ComponentProps<typeof TouchableOpacity> {
	label: string
	labelStyle?: StyleProp<TextStyle>
	style?: StyleProp<ViewStyle>
}

const PrimaryButton = ({
	label,
	labelStyle,
	style,
	disabled,
	...props
}: IPrimaryButton) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={[
				commonStyles.center,
				primaryButtonStyles.container,
				disabled && primaryButtonStyles.disabledStyle,
				style,
			]}
			{...props}
		>
			<Typography style={labelStyle}>{label}</Typography>
		</TouchableOpacity>
	)
}

export default PrimaryButton
