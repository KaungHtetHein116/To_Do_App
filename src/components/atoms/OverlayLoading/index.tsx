import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import overlayLoadingStyles from './overlayLoading.styles'

const OverlayLoading = ({ isVisible }: { isVisible: boolean }) => {
	if (!isVisible) return null
	return (
		<View style={overlayLoadingStyles.container}>
			<ActivityIndicator color={'white'} />
		</View>
	)
}

export default OverlayLoading
