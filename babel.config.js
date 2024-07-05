module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.json'],
				alias: {
					'@': './src',
					types: './@types',
				},
			},
		],
		['@babel/plugin-transform-private-methods', { loose: true }],
		'react-native-reanimated/plugin', // needs to be last
	],
}
