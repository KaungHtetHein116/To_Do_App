import Icons from '@/assets/icons'
import { Typography } from '@/components'
import { IToDoItem } from '@/store/toDo/types'
import { commonStyles, gutters, layout } from '@/theme'
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import homeStyles from '../home.styles'
import useToDoItem from '../hooks/useToDoItem'
import { formatDate } from '@/utils/date'
import { Swipeable } from 'react-native-gesture-handler'
import { LightAppColors } from '@/theme/variables'
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated'

const ToDoItem = ({ item, index }: { item: IToDoItem; index: number }) => {
	const { onPressCheckIcon, onPressDelete, onPressEdit } = useToDoItem({
		id: item.id,
	})

	const renderRightActions = () => {
		return (
			<Pressable
				onPress={onPressDelete}
				style={[
					commonStyles.center,
					commonStyles.largeBMargin,
					commonStyles.xLargePadding,
					homeStyles.rightAction,
				]}
			>
				<Image
					source={Icons.trash}
					style={commonStyles.icon}
					tintColor={LightAppColors.white}
				/>
			</Pressable>
		)
	}

	return (
		<View
			style={{
				opacity: item.isCompleted ? 0.5 : 1,
			}}
		>
			<Animated.View
				entering={FadeInLeft.delay(200 * index)}
				exiting={FadeOutLeft.delay(200)}
			>
				<Swipeable
					renderRightActions={renderRightActions}
					useNativeAnimations
					friction={2}
					overshootRight={false}
					shouldCancelWhenOutside
				>
					<Pressable
						onPress={onPressEdit}
						style={[
							gutters.regularPadding,
							commonStyles.regularBorderRadius,
							commonStyles.smallShadow,
							commonStyles.largeBMargin,
							commonStyles.regularHMargin,
							{
								backgroundColor: item.color,
							},
						]}
					>
						<View
							style={[
								gutters.largeBMargin,
								layout.rowHCenter,
								layout.justifyContentBetween,
							]}
						>
							<Typography
								color="highEmphasis"
								variant="headline1"
								style={[homeStyles.itemTitle]}
								numberOfLines={1}
							>
								{item.title}
							</Typography>
							<Pressable onPress={onPressCheckIcon}>
								<Image
									source={
										item.isCompleted
											? Icons.checked
											: Icons.check
									}
									style={[homeStyles.icon]}
								/>
							</Pressable>
						</View>
						<Typography
							variant="caption1"
							style={[gutters.xLargeBMargin]}
							color="mediumEmphasis"
						>
							{item.description}
						</Typography>
						<Typography variant="caption2" color="lowEmphasis">
							{`Created at ${formatDate(item.id)}`}
						</Typography>
					</Pressable>
				</Swipeable>
			</Animated.View>
		</View>
	)
}

export default ToDoItem
