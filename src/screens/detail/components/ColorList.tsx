import { Pressable, View } from 'react-native'
import React from 'react'
import { ColorTags } from '@/contstants'
import { commonStyles, layout } from '@/theme'
import { LightAppColors } from '@/theme/variables'
import detailStyles from '../detail.styles'
import { Controller } from 'react-hook-form'

const ColorList = ({ control, name }: { control: any; name: string }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => {
				return (
					<View
						style={[
							layout.rowHCenter,
							commonStyles.largeBMargin,
							{ gap: 10 },
						]}
					>
						{ColorTags.map(color => {
							const isSelected = color === value
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
									onPress={() => onChange(color)}
								/>
							)
						})}
					</View>
				)
			}}
		/>
	)
}

export default ColorList
