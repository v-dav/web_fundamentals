const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send("Hello World")
})

app.get('/hello', (req, res) => {
	res.send("hello there")
})

app.delete('/hello', (req, res) => {
	res.send("I don't want to say hello to you")
})

app.listen(port, () => {
	console.log(`Example app listening to the port ${port}`)
})
