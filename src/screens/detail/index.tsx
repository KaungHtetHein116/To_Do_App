import {
	FormTextInput,
	PrimaryButton,
	SafeView,
	Typography,
} from '@/components'
import { HomeStackNavigatorParam } from '@/navigators/types'
import { commonStyles, gutters, layout } from '@/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import detailStyles from './detail.styles'
import useDetail from './hooks/useDetail'

const Detail = ({
	route,
}: NativeStackScreenProps<HomeStackNavigatorParam, 'DETAIL'>) => {
	const { control, defaultValue, isDirty, onPressSave } = useDetail({
		id: route.params?.id,
	})

	return (
		<SafeView style={[gutters.regularMargin]}>
			<Typography variant="title1" style={[commonStyles.regularBMargin]}>
				{route.params?.id ? 'Update' : 'Create'}
			</Typography>
			<FormTextInput
				control={control}
				name="toDo"
				defaultValue={defaultValue}
			/>
			<PrimaryButton
				label="Save"
				style={[layout.selfCenter, gutters.regularTMargin]}
				onPress={onPressSave}
				labelStyle={detailStyles.labelStyle}
				disabled={!isDirty}
			/>
		</SafeView>
	)
}

export default Detail
