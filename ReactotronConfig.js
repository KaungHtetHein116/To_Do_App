import Reactotron, { networking } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import apisaucePlugin from 'reactotron-apisauce' //

const reactotron = Reactotron.configure()
	.configure({ name: 'React Native Todo' })
	.use(apisaucePlugin({}))
	.useReactNative()
	.use(networking())
	.use(reactotronRedux())
	.connect()

export default reactotron
