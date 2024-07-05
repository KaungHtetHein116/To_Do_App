import { LightAppColors } from '@/theme/variables'
import { StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
	addButton: {
		bottom: 20,
		right: 20,
		height: 60,
		width: 60,
		borderRadius: 30,
	},
	icon: {
		height: 20,
		width: 20,
		marginRight: 10,
	},
	buttonLabel: {
		color: LightAppColors.whiteHighEmphasis,
	},
})

export default homeStyles
