import { LightAppColors, RadiusSizes } from '@/theme/variables'
import { StyleSheet } from 'react-native'

const primaryButtonStyles = StyleSheet.create({
	container: {
		height: 40,
		width: 120,
		backgroundColor: LightAppColors.jasmine,
		borderRadius: RadiusSizes.regular,
	},
	disabledStyle: {
		backgroundColor: 'gray',
	},
})

export default primaryButtonStyles
