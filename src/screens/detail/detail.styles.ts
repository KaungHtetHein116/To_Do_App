import { LightAppColors } from '@/theme/variables'
import { StyleSheet } from 'react-native'

const detailStyles = StyleSheet.create({
	labelStyle: {
		color: LightAppColors.whiteHighEmphasis,
	},
	colorItem: {
		borderRadius: 20,
		borderWidth: 1,
		height: 40,
		width: 40,
	},
})

export default detailStyles
