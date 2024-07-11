import { View } from 'react-native'
import React from 'react'
import ToDoItem from './ToDoItem'
import { useToDo } from '@/store/hooks'
import { Typography } from '@/components'
import { commonStyles } from '@/theme'
import { IToDoItem } from '@/store/toDo/types'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { useHomeAnimation } from '@/context/HomeAnimationProvider'
import homeStyles from '../home.styles'

const ToDoList = () => {
	const { toDolist } = useToDo()
	const { scrollHandler } = useHomeAnimation()

	const renderItem = ({
		item,
		index,
	}: {
		item: IToDoItem
		index: number
	}) => {
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
				commonStyles.flexGrow,
			]}
			style={[commonStyles.fill, commonStyles.flexGrow]}
			data={toDolist}
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
