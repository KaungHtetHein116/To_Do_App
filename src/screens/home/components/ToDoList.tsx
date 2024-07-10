import { View } from 'react-native'
import React from 'react'
import ToDoItem from './ToDoItem'
import { Typography } from '@/components'
import { commonStyles } from '@/theme'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { useHomeAnimation } from '@/context/HomeAnimationProvider'
import homeStyles from '../home.styles'

const ToDoList = () => {
	const { scrollHandler } = useHomeAnimation()

	const renderItem = ({ item, index }: { item: any; index: number }) => {
		return <ToDoItem item={item} index={index} />
	}

	return (
		<Animated.FlatList
			contentInsetAdjustmentBehavior={'automatic'}
			onScroll={scrollHandler}
			itemLayoutAnimation={LinearTransition.delay(200)}
			contentContainerStyle={[
				commonStyles.regularVPadding,
				commonStyles.xxLargeBMargin,
			]}
			style={[commonStyles.fill, commonStyles.flexGrow]}
			data={[]}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			keyExtractor={item => item.id}
			ListFooterComponent={<View style={[homeStyles.bottomGap]} />}
			ListEmptyComponent={
				<View style={[commonStyles.fill, commonStyles.center]}>
					<Typography>{'All clear !!!'}</Typography>
				</View>
			}
		/>
	)
}

export default ToDoList
