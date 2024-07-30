/**
 * @format
 */
if (__DEV__) {
	require('./ReactotronConfig')
}
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'

import startServer from '@/lib/miragejs/server'
import Facematch from './accuraScan/App'

if (window.server) {
	window.server.shutdown()
}

window.server = startServer()

AppRegistry.registerComponent(appName, () => Facematch)
