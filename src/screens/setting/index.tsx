import React, { useCallback } from 'react'
import commonStyles from '@/theme/commonStyles'
import { PrimaryButton, SafeView } from '@/components'
import settingStyles from './setting.styles'
import { useDeleteAllToDoMutation } from '@/services/toDos'

const Setting = () => {
	const [deleteAll] = useDeleteAllToDoMutation()
	const onPress = useCallback(() => {
		deleteAll()
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
