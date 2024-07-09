import { View, Text } from 'react-native'
import React from 'react'
import { Typography } from '@/components'
import { commonStyles } from '@/theme'

const AnimatedTitle = () => {
	return (
		<View
			style={[
				commonStyles.largePadding,
				commonStyles.center,
				{
					backgroundColor: 'white',
				},
			]}
		>
			<Typography
				style={[
					{
						transform: [{ scale: 2 }],
					},
				]}
			>
				{'To Do List'}
			</Typography>
		</View>
	)
}

export default AnimatedTitle
