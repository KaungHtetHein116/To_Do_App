import { Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import TypographyStyles from './typography.styles'

type TTypography = 'title1' | 'body1' | 'error'
interface ITypography extends React.ComponentProps<typeof Text> {
	variant?: TTypography
	style?: StyleProp<TextStyle>
	children: React.ReactNode
}

const Typography = ({
	variant = 'body1',
	style,
	children,
	...props
}: ITypography) => {
	return (
		<Text style={[TypographyStyles[variant], style]} {...props}>
			{children}
		</Text>
	)
}

export default Typography
