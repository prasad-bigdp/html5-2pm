const cartDetails = document.getElementById("cart-details")
const cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
displayData(cart)
const total = 0
function displayData(data) {
	cartDetails.textContent = ""
	data.forEach((pro, index) => {
		const prod = document.createElement("div")
		prod.classList.add("cart-product")
		const image = document.createElement("img")
		image.src = pro.thumbnail
		const title = document.createElement("h2")
		title.textContent = pro.title
		const price = document.createElement("p")
		price.textContent = "$" + pro.price
		const deleteButton = document.createElement("button")
		deleteButton.textContent = "❎"
		deleteButton.setAttribute("data-id", index)
		deleteButton.addEventListener("click", remove)
		prod.append(image, title, price, deleteButton)
		cartDetails.appendChild(prod)
	})
}
function remove(e) {
	const index = e.target.getAttribute("data-id")
	const res = confirm("Are you sure to delete?")
	if (res) {
		cart.splice(index, 1)
		displayData(cart)
	}
}
