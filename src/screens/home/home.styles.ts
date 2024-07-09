import { LightAppColors } from '@/theme/variables'
import { StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
	addButton: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		width: 100,
		height: 50,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: LightAppColors.argentanianBlue,
		overflow: 'hidden',
	},
	icon: {
		height: 20,
		width: 20,
	},
	buttonLabel: {
		color: LightAppColors.white,
		fontSize: 22,
	},
	itemCard: {
		backgroundColor: LightAppColors.white,
	},
	itemTitle: {
		width: '80%',
	},
	descriptionInput: {
		minHeight: 200,
	},
	rightAction: {
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		backgroundColor: LightAppColors.rustyRed,
		left: 20,
	},
	bottomGap: {
		height: 50,
	},
})

export default homeStyles
