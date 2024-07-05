import Icons from '@/assets/icons'
import { Typography } from '@/components'
import { IToDoItem } from '@/store/toDo/types'
import { commonStyles, gutters, layout } from '@/theme'
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import homeStyles from '../home.styles'
import useToDoItem from '../hooks/useToDoItem'

const ToDoItem = ({ item, index }: { item: IToDoItem; index: number }) => {
	const { onPressCheckIcon, onPressDelete, onPressEdit } = useToDoItem({
		id: item.id,
	})

	return (
		<View style={[commonStyles.rowHCenter, layout.justifyContentBetween]}>
			<View style={[commonStyles.rowHCenter, gutters.regularRMargin]}>
				<Pressable
					style={[commonStyles.rowHCenter, { flex: 0.8 }]}
					onPress={onPressCheckIcon}
				>
					<Image
						source={item.isCompleted ? Icons.checked : Icons.check}
						style={homeStyles.icon}
					/>
					<Typography
						variant="title1"
						style={{
							textDecorationLine: item.isCompleted
								? 'line-through'
								: 'none',
						}}
						numberOfLines={1}
					>
						{`${index + 1}. ${item.description}`}
					</Typography>
				</Pressable>
			</View>
			<Pressable onPress={onPressEdit}>
				<Image source={Icons.edit} style={homeStyles.icon} />
			</Pressable>
			<Pressable onPress={onPressDelete}>
				<Image source={Icons.trash} style={homeStyles.icon} />
			</Pressable>
		</View>
	)
}

export default ToDoItem
// import Icons from '@/assets/icons'
// import { Typography } from '@/components'
// import { IToDoItem } from '@/store/toDo/types'
// import { commonStyles, gutters, layout } from '@/theme'
// import React from 'react'
// import { Image, Pressable, View } from 'react-native'
// import homeStyles from '../home.styles'
// import useToDoItem from '../hooks/useToDoItem'

// const ToDoItem = ({ item, index }: { item: IToDoItem; index: number }) => {
// 	const { onPressCheckIcon, onPressDelete, onPressEdit } = useToDoItem({
// 		id: item.id,
// 	})

// 	return (
// 		<View style={[commonStyles.rowHCenter, layout.justifyContentBetween]}>
// 			<View style={[commonStyles.rowHCenter, gutters.regularRMargin]}>
// 				<Pressable
// 					style={[commonStyles.rowHCenter, { flex: 0.8 }]}
// 					onPress={onPressCheckIcon}
// 				>
// 					<Image
// 						source={item.isCompleted ? Icons.checked : Icons.check}
// 						style={homeStyles.icon}
// 					/>
// 					<Typography
// 						variant="title1"
// 						style={{
// 							textDecorationLine: item.isCompleted
// 								? 'line-through'
// 								: 'none',
// 						}}
// 						numberOfLines={1}
// 					>
// 						{`${index + 1}. ${item.description}`}
// 					</Typography>
// 				</Pressable>
// 			</View>
// 			<Pressable onPress={onPressEdit}>
// 				<Image source={Icons.edit} style={homeStyles.icon} />
// 			</Pressable>
// 			<Pressable onPress={onPressDelete}>
// 				<Image source={Icons.trash} style={homeStyles.icon} />
// 			</Pressable>
// 		</View>
// 	)
// }

// export default ToDoItem
