import apiClient from './index'

const getToDos = async () => {
	const { data } = await apiClient.get('/todos')
	return data.todos
}

export { getToDos }
