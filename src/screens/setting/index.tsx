import React, { useCallback } from 'react'
import commonStyles from '@/theme/commonStyles'
import { PrimaryButton, SafeView } from '@/components'
import settingStyles from './setting.styles'
import { useDeleteAllTodo, useTodos } from '@/api/hooks/useToDos'

const Setting = () => {
	const { data } = useTodos()
	const { mutate: deleteAllTodo, isPending } = useDeleteAllTodo()
	const onPress = useCallback(() => {
		deleteAllTodo(undefined, { onSuccess: () => {} })
	}, [])

	return (
		<SafeView style={[commonStyles.center]}>
			<PrimaryButton
				label={data?.length ? 'Clear Data' : 'All Clear !!'}
				labelStyle={settingStyles.buttonLabel}
				onPress={onPress}
				style={settingStyles.removeButton}
				isLoading={isPending}
				disabled={data?.length === 0}
			/>
		</SafeView>
	)
}

export default Setting
