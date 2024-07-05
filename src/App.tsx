import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import HomeStackNavigator from './navigators/stackNavigators/HomeStackNavigator'
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator } from 'react-native'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<ActivityIndicator />} persistor={persistor}>
				<HomeStackNavigator />
			</PersistGate>
		</Provider>
	)
}

export default App
