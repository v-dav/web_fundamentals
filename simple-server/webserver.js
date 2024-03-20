// import packages
const net = require('net');
const fs = require("fs");

// Creating a very basic TCP server that listens to data and prints out that data
const server = net.createServer((socket) => {
	socket.on("data", (buffer) => {
		const requestString = buffer.toString("utf-8");
		const request = parseRequest(requestString);
		
		if (request.method === "GET") {
			if (fs.existsSync(`.${request.path}`)) {
				socket.write("HTTP/1.1 200 OK");
			} else {
				socket.write("HTTP/1.1 404 Not found")
			}
		}
	})
})

// Parsing incoming request string
const parseRequest = (requestString) => {
	const [method, path, protocol] = requestString.split(" ");
	return {
		method,
		path,
		protocol
	}
}

// Server listening on port
server.listen(9999, () => console.log("Listening..."))
