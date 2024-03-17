const express = require("express")
let data = require("./data")

const app = express()
const port = 3000
app.use(express.json())


const addListing = (newItem) => {
	data = [...data, newItem]
}

// GET /listings - return the full list of listings
// POST /listings - create a new listing

// GET /listings/id - return a specific listing matching an id
// PUT /listings/id - update the specific listing matching the id
// DELETE /listings/id - delete the listing matching the id from the list

// Basic examples of the API
app.get('/', (req, res) => {
	res.send("Hello World")
})

app.get('/hello', (req, res) => {
	res.send("hello there")
})

app.delete('/hello', (req, res) => {
	res.status(404).send("I don't want to say hello to you")
})

// Our listing exemple API
app.get("/listings", (req, res) => {
	res.send(data)
})

app.post("/listings", (req, res) => {
	addListing(req.body)
	res.status(201).send(data)
})

app.listen(port, () => {
	console.log(`Example app listening to the port ${port}`)
})
