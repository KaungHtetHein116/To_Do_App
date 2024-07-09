import { View, Pressable, Image } from 'react-native'
import React from 'react'
import { commonStyles, gutters, layout } from '@/theme'
import Typography from '../Typography'
import Icons from '@/assets/icons'
import headerStyles from './header.styles'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title }: { title: string }) => {
	const navigation = useNavigation()

	const onPressBack = () => {
		navigation.goBack()
	}

	return (
		<View
			style={[
				gutters.regularPadding,
				layout.rowHCenter,
				layout.justifyContentBetween,
			]}
		>
			<Pressable onPress={onPressBack}>
				<Image source={Icons.back} style={[commonStyles.icon]} />
			</Pressable>
			<Typography>{title}</Typography>
			<View style={[headerStyles.emptyView]} />
		</View>
	)
}

export default Header
