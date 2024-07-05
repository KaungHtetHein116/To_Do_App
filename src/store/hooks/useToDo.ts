import { useAppSelector } from '../index'

const useToDo = () => {
	const { toDolist } = useAppSelector(state => state.toDo)

	return { toDolist }
}

export default useToDo
