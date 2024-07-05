import React, { useCallback } from 'react'
import commonStyles from '@/theme/commonStyles'
import { PrimaryButton, SafeView } from '@/components'
import homeStyles from './home.styles'
import ToDoList from './components/ToDoList'
import { navigate } from '@/navigators/utils/navigator'
import { DETAIL } from '@/navigators/utils/routeName'

const Home = () => {
	const onPress = useCallback(() => {
		navigate(DETAIL)
	}, [])

	return (
		<SafeView>
			<ToDoList />
			<PrimaryButton
				label="+"
				labelStyle={homeStyles.buttonLabel}
				style={[commonStyles.absolute, homeStyles.addButton]}
				onPress={onPress}
			/>
		</SafeView>
	)
}

export default Home
