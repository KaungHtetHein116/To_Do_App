import { Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import TypographyStyles from './typography.styles'
import { LightAppColors } from '@/theme/variables'

type TTypography =
	| 'display1'
	| 'display2'
	| 'display3'
	| 'title1'
	| 'title2'
	| 'body1'
	| 'body2'
	| 'body3'
	| 'caption1'
	| 'caption2'
	| 'headline'
	| 'headline1'
	| 'headline2'

type TColor = keyof typeof LightAppColors
interface ITypography extends React.ComponentProps<typeof Text> {
	variant?: TTypography
	style?: StyleProp<TextStyle>
	children: React.ReactNode
	color?: TColor
}

const Typography = ({
	variant = 'body1',
	style,
	children,
	color = 'highEmphasis',
	...props
}: ITypography) => {
	return (
		<Text
			style={[
				TypographyStyles[variant],
				{ color: LightAppColors[color] },
				style,
			]}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Typography
