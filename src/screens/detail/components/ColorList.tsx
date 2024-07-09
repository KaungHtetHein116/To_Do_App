import { Pressable, View } from 'react-native'
import React from 'react'
import { ColorTags } from '@/contstants'
import { commonStyles, layout } from '@/theme'
import { LightAppColors } from '@/theme/variables'
import detailStyles from '../detail.styles'

const ColorList = ({
	colorTag,
	setColorTag,
}: {
	colorTag: string
	setColorTag: (v: string) => void
}) => {
	return (
		<View
			style={[layout.rowHCenter, commonStyles.largeBMargin, { gap: 10 }]}
		>
			{ColorTags.map(color => {
				const isSelected = color === colorTag
				return (
					<Pressable
						style={[
							detailStyles.colorItem,
							{
								backgroundColor: color,

								borderColor: isSelected
									? LightAppColors.highEmphasis
									: LightAppColors.lowEmphasis,
							},
						]}
						key={color}
						onPress={() => setColorTag(color)}
					/>
				)
			})}
		</View>
	)
}

export default ColorList
