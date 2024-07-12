import { RefreshControl, View } from 'react-native'
import React from 'react'
import ToDoItem from './ToDoItem'
import { LoadingIndicator, Typography } from '@/components'
import { commonStyles } from '@/theme'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { useHomeAnimation } from '@/context/HomeAnimationProvider'
import homeStyles from '../home.styles'
import { useTodos } from '@/api/hooks/useToDos'

const ToDoList = () => {
	const { scrollHandler } = useHomeAnimation()
	const { data, isLoading, refetch } = useTodos()

	const renderItem = ({ item, index }: { item: any; index: number }) => {
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
				commonStyles.flexGrow,
			]}
			style={[commonStyles.fill, commonStyles.flexGrow]}
			data={data}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			keyExtractor={item => item.id}
			ListFooterComponent={<View style={[homeStyles.bottomGap]} />}
			ListEmptyComponent={
				<View style={[commonStyles.fill, commonStyles.center]}>
					<Typography>{'All clear !!!'}</Typography>
				</View>
			}
			refreshControl={
				<RefreshControl onRefresh={refetch} refreshing={false} />
			}
		/>
	)
}

export default ToDoList
