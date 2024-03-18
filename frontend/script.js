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
	.then(data => {
		const listingsContainer = createListingsContainer()
		data.forEach(listing => {
			const listingNode = createListing(listing)
			listingsContainer.appendChild(listingNode)
		})
		rootElement.appendChild(listingsContainer)
	})
}

const createListingsContainer = () => {
	const container = document.createElement("div")
	container.classList.add("listings-container")
	return container
}

const createListing = (listingData) => {
	const listing = document.createElement("a")
	listing.classList.add("listing")
	const image = document.createElement("img")
	image.src = listingData.imageUrl
	
	const header = document.createElement("h2")
	header.classList.add("listing-header")
	header.textContent = listingData.header
	
	const paragraph = document.createElement("p")
	paragraph.classList.add("listing-paragraph")
	paragraph.textContent = listingData.description
	
	const innerContainer = document.createElement("div")
	innerContainer.classList.add("listing-inner-container")
	
	innerContainer.appendChild(header)
	innerContainer.appendChild(paragraph)

	listing.appendChild(image)
	listing.appendChild(innerContainer)

	return listing
}

getListing()
