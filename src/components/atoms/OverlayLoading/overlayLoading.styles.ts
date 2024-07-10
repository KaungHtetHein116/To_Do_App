import { StyleSheet } from 'react-native'

const overlayLoadingStyles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
	},
})

export default overlayLoadingStyles
