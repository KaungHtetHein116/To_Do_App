import { createServer, Model } from 'miragejs'

const startServer = () => {
	let server = createServer({
		models: {
			todo: Model,
		},

		seeds(server) {
			server.create('todo', {
				id: new Date().toISOString(),
				title: 'Sample Todo',
				description: 'This is a sample todo',
				isCompleted: false,
				color: '#FBFEFB',
			})
			server.create('todo', {
				id: new Date().toISOString(),
				title: 'Sample Todo 2',
				description: 'This is a sample todo ',
				isCompleted: true,
				color: '#FBFEFB',
			})
		},

		routes() {
			this.get('/todos', schema => {
				return schema.todos.all()
			})

			this.get('/todos/:id', (schema, request) => {
				let id = request.params.id
				return schema.todos.find(id)
			})

			this.post('/todos', (schema, request) => {
				let attrs = JSON.parse(request.requestBody)
				return schema.todos.create({
					id: new Date().toISOString(),
					...attrs,
				})
			})

			this.put('/todos/:id', (schema, request) => {
				let newAttrs = JSON.parse(request.requestBody)
				let id = request.params.id
				let todo = schema.todos.find(id)
				return todo.update(newAttrs)
			})

			this.delete('/todos/:id', (schema, request) => {
				let id = request.params.id
				schema.todos.find(id).destroy()
				return { message: 'Deleted successfully' }
			})

			this.delete('/todos', schema => {
				schema.todos.all().destroy()
				return { message: 'All todos deleted successfully' }
			})
		},
	})

	return server
}

export default startServer
