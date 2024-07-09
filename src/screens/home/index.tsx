import { SafeView } from '@/components'
import HomeAnimationProvider from '@/context/HomeAnimationProvider'
import React from 'react'
import AnimatedButton from './components/AnimatedButton'
import ToDoList from './components/ToDoList'
import AnimatedTitle from './components/AnimatedTitle'

const Home = () => {
	return (
		<HomeAnimationProvider>
			<SafeView>
				<ToDoList />
				<AnimatedButton />
			</SafeView>
		</HomeAnimationProvider>
	)
}

export default Home
