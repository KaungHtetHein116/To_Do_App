import {
	FormTextInput,
	Header,
	LoadingIndicator,
	PrimaryButton,
	SafeView,
} from '@/components'
import { HomeStackNavigatorParam } from '@/navigators/types'
import { commonStyles, gutters, layout } from '@/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import detailStyles from './detail.styles'
import useDetail from './hooks/useDetail'
import { View } from 'react-native'
import ColorList from './components/ColorList'
import homeStyles from '../home/home.styles'
import { LightAppColors } from '@/theme/variables'

const Detail = ({
	route,
}: NativeStackScreenProps<HomeStackNavigatorParam, 'DETAIL'>) => {
	const {
		control,
		defaultValue,
		isDirty,
		onPressSave,
		colorTag,
		setColorTag,
		title,
		isLoading,
		isSaving,
	} = useDetail({
		id: route.params?.id,
	})

	if (isLoading) return <LoadingIndicator />

	return (
		<SafeView>
			<Header title={title} />
			<View style={[commonStyles.regularPadding, commonStyles.fill]}>
				<FormTextInput
					control={control}
					name="title"
					defaultValue={defaultValue?.title}
					containerStyle={gutters.regularBMargin}
					placeholder="Title"
				/>
				<FormTextInput
					control={control}
					name="description"
					defaultValue={defaultValue?.description}
					style={homeStyles.descriptionInput}
					containerStyle={gutters.xLargeBMargin}
					placeholder="Description"
				/>
				<ColorList colorTag={colorTag} setColorTag={setColorTag} />
				<PrimaryButton
					label="Save"
					style={[
						layout.selfCenter,
						gutters.xLargeTMargin,
						{ backgroundColor: LightAppColors.argentanianBlue },
					]}
					onPress={onPressSave}
					labelStyle={detailStyles.labelStyle}
					disabled={!isDirty}
					isLoading={isSaving}
				/>
			</View>
		</SafeView>
	)
}

export default Detail
