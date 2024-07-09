import Reactotron, { networking } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure() // controls connection & communication settings
	.configure({ name: 'React Native Todo' })
	.useReactNative() // add all built-in react native plugins
	.use(networking())
	.use(reactotronRedux())
	.connect() // let's connect!

export default reactotron
