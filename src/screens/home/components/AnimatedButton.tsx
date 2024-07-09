import React, { useCallback } from 'react'
import Animated from 'react-native-reanimated'
import { Typography } from '@/components'
import { Pressable } from 'react-native'
import { navigate } from '@/navigators/utils/navigator'
import { DETAIL } from '@/navigators/utils/routeName'
import homeStyles from '../home.styles'
import { useHomeAnimation } from '@/context/HomeAnimationProvider'
import { commonStyles } from '@/theme'

const AnimatedButton = () => {
	const { floatingButtonAnimatedStyle } = useHomeAnimation()
	const onPress = useCallback(() => {
		navigate(DETAIL)
	}, [])

	return (
		<Animated.View
			style={[homeStyles.addButton, floatingButtonAnimatedStyle]}
		>
			<Pressable
				onPress={onPress}
				style={[
					commonStyles.center,
					commonStyles.fullWidth,
					commonStyles.flexGrow,
				]}
			>
				<Typography style={[homeStyles.buttonLabel]}>{'+'}</Typography>
			</Pressable>
		</Animated.View>
	)
}

export default AnimatedButton
