import { FlatList, View } from 'react-native'
import React from 'react'
import ToDoItem from './ToDoItem'
import { useToDo } from '@/store/hooks'
import { Typography } from '@/components'
import { commonStyles } from '@/theme'
import { IToDoItem } from '@/store/toDo/types'

const ToDoList = () => {
	const { toDolist } = useToDo()

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
		<FlatList
			contentContainerStyle={[
				commonStyles.fill,
				commonStyles.regularPadding,
			]}
			data={toDolist}
			renderItem={renderItem}
			ListEmptyComponent={
				<View style={[commonStyles.fill, commonStyles.center]}>
					<Typography>{'All clear !!!'}</Typography>
				</View>
			}
		/>
	)
}

export default ToDoList
