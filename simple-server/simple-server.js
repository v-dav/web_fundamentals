const net = require("net")

class SimpleServer {
	constructor() {
		this.server = net.createServer((connexion) => {
			connexion.on("data", (data) => {
				console.log(data.toString())
			})
		})
	}

	listenAndServe = (port) => {
		this.server.listen(port, () => {
			console.log(`listening on connexion on port ${port}`)
		})
	}
}

module.exports = SimpleServer
