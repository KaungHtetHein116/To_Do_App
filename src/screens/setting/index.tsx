import { View } from 'react-native'
import React, { useCallback } from 'react'
import commonStyles from '@/theme/commonStyles'
import { PrimaryButton } from '@/components'
import settingStyles from './setting.styles'
import { useDispatch } from 'react-redux'
import { clearTodos } from '@/store/toDo'

const Setting = () => {
	const dispatch = useDispatch()
	const onPress = useCallback(() => {
		dispatch(clearTodos())
	}, [])

	return (
		<View style={[commonStyles.fill, commonStyles.center]}>
			<PrimaryButton
				label="Clear Data"
				labelStyle={settingStyles.buttonLabel}
				onPress={onPress}
			/>
		</View>
	)
}

export default Setting
