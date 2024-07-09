import { SafeAreaView } from 'react-native'
import React, { ReactNode } from 'react'
import { commonStyles } from '@/theme'
import safeViewStyles from './safeView.styles'

interface ISafeView extends React.ComponentProps<typeof SafeAreaView> {
	children: ReactNode
}

const SafeView = ({ children, style, ...props }: ISafeView) => {
	return (
		<SafeAreaView
			{...props}
			style={[commonStyles.fill, safeViewStyles.container, style]}
		>
			{children}
		</SafeAreaView>
	)
}

export default SafeView
