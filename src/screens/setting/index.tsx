import React, { useCallback } from 'react'
import commonStyles from '@/theme/commonStyles'
import { PrimaryButton, SafeView } from '@/components'
import settingStyles from './setting.styles'

const Setting = () => {
	const onPress = useCallback(() => {}, [])

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
