import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParam } from '../types'
import { DETAIL, TAB_NAVIGATOR } from '../utils/routeName'
import { DetailScreen } from '@/screens'
import { navigationRef } from '../utils/navigator'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from '../tabNavigators/TabNavigator'

const Stack = createNativeStackNavigator<HomeStackNavigatorParam>()

const HomeStackNavigator = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator>
				<Stack.Screen
					name={TAB_NAVIGATOR}
					component={TabNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={DETAIL}
					component={DetailScreen}
					options={{
						headerBackTitleVisible: false,
						headerTitle: 'Detail',
						presentation: 'modal',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default HomeStackNavigator
