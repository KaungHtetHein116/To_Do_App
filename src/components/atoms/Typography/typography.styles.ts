import { FontSize } from '@/theme/variables'
import { StyleSheet } from 'react-native'

const TypographyStyles = StyleSheet.create({
	display1: {
		fontSize: FontSize.xxLarge,
		lineHeight: 32,
		fontWeight: '500',
	},
	display2: {
		fontSize: FontSize.xLarge,
		lineHeight: 28,
		fontWeight: '500',
	},
	display3: {
		fontSize: FontSize.large,
		lineHeight: 23,
		fontWeight: '700',
	},
	title1: {
		fontSize: FontSize.large,
		lineHeight: 27,
		fontWeight: '500',
	},
	title2: {
		fontSize: FontSize.large,
		lineHeight: 23,
		fontWeight: '400',
	},
	headline: {
		fontSize: 32,
		fontWeight: '900',
	},
	headline1: {
		fontSize: FontSize.regular,
		lineHeight: 20,
		fontWeight: '700',
	},
	headline2: {
		fontSize: FontSize.small,
		lineHeight: 21,
		fontWeight: '500',
	},
	body1: {
		fontSize: FontSize.regular,
		lineHeight: 20,
		fontWeight: '400',
	},
	body2: {
		fontSize: FontSize.small,
		lineHeight: 18,
		fontWeight: '400',
	},
	body3: {
		fontSize: FontSize.xSmall,
		lineHeight: 18,
		fontWeight: '400',
	},
	caption1: {
		fontSize: FontSize.xSmall,
		lineHeight: 15,
		fontWeight: '500',
	},
	caption2: {
		fontSize: FontSize.xxSmall,
		lineHeight: 13,
		fontWeight: '400',
	},
})

export default TypographyStyles
