import { StyleSheet } from 'react-native'

const overlayLoadingStyles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
})

export default overlayLoadingStyles
