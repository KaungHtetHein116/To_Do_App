import React from 'react'
import { HomeScreen, SettingScreen } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HOME, SETTING } from '../utils/routeName'
import { Image } from 'react-native'
import Icons from '@/assets/icons'
import tabNavigatorStyles from './tabNavigator.styles'
import { LightAppColors } from '@/theme/variables'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: LightAppColors.argentanianBlue,
				},
				tabBarActiveTintColor: LightAppColors.shadow,
				tabBarInactiveTintColor: LightAppColors.mediumEmphasis,
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name={HOME}
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<Image
							source={Icons.home}
							style={tabNavigatorStyles.icon}
							tintColor={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={SETTING}
				component={SettingScreen}
				options={{
					tabBarLabel: 'Setting',
					tabBarIcon: ({ color }) => (
						<Image
							source={Icons.setting}
							style={tabNavigatorStyles.icon}
							tintColor={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabNavigator
