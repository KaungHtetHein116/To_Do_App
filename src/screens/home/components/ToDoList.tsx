import { RefreshControl, View } from 'react-native'
import React from 'react'
import ToDoItem from './ToDoItem'
import { LoadingIndicator, Typography } from '@/components'
import { commonStyles } from '@/theme'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { useHomeAnimation } from '@/context/HomeAnimationProvider'
import homeStyles from '../home.styles'
import { useGetToDosQuery } from '@/services/toDos'
import { IToDoItem } from '@/services/toDos/types'

const ToDoList = () => {
	const { data, isLoading, refetch } = useGetToDosQuery()
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

	if (isLoading) return <LoadingIndicator />

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
			data={data?.todos}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			keyExtractor={item => item.id}
			ListFooterComponent={<View style={[homeStyles.bottomGap]} />}
			ListEmptyComponent={
				<View style={[commonStyles.center]}>
					<Typography>{'All clear !!!'}</Typography>
				</View>
			}
			refreshControl={
				<RefreshControl refreshing={false} onRefresh={refetch} />
			}
		/>
	)
}

export default ToDoList
