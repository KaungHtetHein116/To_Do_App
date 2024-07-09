import React, { createContext, ReactNode, useContext, useMemo } from 'react'
import {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'

interface IHomeAnimationContext {
	floatingButtonAnimatedStyle: Record<string, any>
	scrollHandler: (event: any) => void
}

export const HomeAnimationContext = createContext<IHomeAnimationContext>({
	floatingButtonAnimatedStyle: {},
	scrollHandler: () => {},
})

const HomeAnimationProvider = ({ children }: { children: ReactNode }) => {
	const translationY = useSharedValue(0)
	const buttonWidth = useSharedValue(100)

	const floatingButtonAnimatedStyle = useAnimatedStyle(() => {
		return {
			width: buttonWidth.value,
		}
	})

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: event => {
			if (event.contentOffset.y < 0) {
				return
			}

			const currentOffset = event.contentOffset.y

			if (currentOffset > translationY.value) {
				buttonWidth.value = withTiming(50)
			} else {
				buttonWidth.value = withTiming(100)
			}

			translationY.value = event.contentOffset.y
		},
	})

	const value = useMemo(
		() => ({
			scrollHandler,
			floatingButtonAnimatedStyle,
		}),
		[scrollHandler, floatingButtonAnimatedStyle],
	)

	return (
		<HomeAnimationContext.Provider value={value}>
			{children}
		</HomeAnimationContext.Provider>
	)
}

export default HomeAnimationProvider
export const useHomeAnimation = () => useContext(HomeAnimationContext)
