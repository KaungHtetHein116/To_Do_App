import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import HomeStackNavigator from './navigators/stackNavigators/HomeStackNavigator'
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { commonStyles } from './theme'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<ActivityIndicator />} persistor={persistor}>
				<GestureHandlerRootView style={[commonStyles.fill]}>
					<HomeStackNavigator />
				</GestureHandlerRootView>
			</PersistGate>
		</Provider>
	)
}

export default App
