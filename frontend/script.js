const rootElement = document.getElementById("root")

const renderHeader = () => {
	const header = document.createElement("div")
	header.classList.add("header")
	
	const headerText = document.createElement("h1")
	headerText.classList.add("header-text")
	headerText.textContent = "Listings"
	header.appendChild(headerText)

	rootElement.appendChild(header)
}
renderHeader()

const getListing = () => {
	fetch("http://localhost:3000/listings")
	.then(response => response.json())
	.then(data => console.log(data))
}

getListing()
