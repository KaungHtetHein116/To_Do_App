import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HomeStackNavigator from './navigators/stackNavigators/HomeStackNavigator'
import { commonStyles } from './theme'

const queryClient = new QueryClient()

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<GestureHandlerRootView style={[commonStyles.fill]}>
				<HomeStackNavigator />
			</GestureHandlerRootView>
		</QueryClientProvider>
	)
}

export default App
