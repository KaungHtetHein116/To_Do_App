import { moderateScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native'

export const LightAppColors = {
	highEmphasis: '#202020',
	mediumEmphasis: '#565656',
	lowEmphasis: '#AAAAAA',
	disableEmphasis: '#B6B6B6',
	whiteHighEmphasis: '#FFFFFF',
	white: '#FFFFFF',
	cosmicLatte: '#FFF8E8',
	jasmine: '#FCD581',
	rustyRed: '#D51941',
	claret: '#990D35',
	shadow: '#000000',
	atomicTemgerin: '#DA627D',
	argentanianBlue: '#35A7FF',
	orange: 'orange',
}

export const FontSize = {
	xxLarge: moderateScale(26),
	xLarge: moderateScale(24),
	large: moderateScale(20),
	regular: moderateScale(18),
	small: moderateScale(16),
	xSmall: moderateScale(14),
	xxSmall: moderateScale(12),
}

/**
 * Radius Sizes
 */

export const RadiusSizes = {
	small: 6,
	regular: 8,
	large: 16,
	xLarge: 20,
	round: 100,
}

const xSmall = moderateScale(4)
const small = moderateScale(8)
const regular = moderateScale(12)
const large = moderateScale(16)
const xLarge = moderateScale(20)
const xxLarge = moderateScale(24)
const xxxLarge = moderateScale(40)

export const MetricsSizes = {
	xSmall,
	small,
	regular,
	large,
	xLarge,
	xxLarge,
	xxxLarge,
}

export const Dimension = {
	device: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
}

export default {
	FontSize,
	MetricsSizes,
}
