import React, { useCallback } from 'react'
import commonStyles from '@/theme/commonStyles'
import { PrimaryButton, SafeView } from '@/components'
import settingStyles from './setting.styles'
import { useDispatch } from 'react-redux'
import { clearTodos } from '@/store/toDo'

const Setting = () => {
	const dispatch = useDispatch()
	const onPress = useCallback(() => {
		dispatch(clearTodos())
	}, [])

	return (
		<SafeView style={[commonStyles.center]}>
			<PrimaryButton
				label="Clear Data"
				labelStyle={settingStyles.buttonLabel}
				onPress={onPress}
				style={settingStyles.removeButton}
			/>
		</SafeView>
	)
}

export default Setting
