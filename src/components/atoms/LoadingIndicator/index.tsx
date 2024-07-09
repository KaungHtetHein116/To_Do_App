import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { commonStyles } from '@/theme'

const LoadingIndicator = () => {
	return (
		<View style={[commonStyles.fill, commonStyles.center]}>
			<ActivityIndicator size={'large'} />
		</View>
	)
}

export default LoadingIndicator
