import "../CSS/style.css";
import image1 from "../Images/About/indoors-image.jpg";
import image2 from "../Images/About/outdoors-image.jpg";
import image3 from "../Images/About/cooking-image.jpg";

//function mainContent

function offerItem(text, color) {
	let offer = document.createElement("li");
	offer.textContent = text;
	offer.style.textShadow = "4px 4px 15px " + color;
	return offer;
}

function whatWeoffer() {
	let container = document.createElement("div");
	let subTitle = document.createElement("h3");

	let tempele = document.createElement("ul");
	tempele.classList.add("offers");

	tempele.appendChild(offerItem("Every weekend: 24/7", "blue"));
	tempele.appendChild(offerItem("Midnight: 12:00AM~06:00AM", "violet"));
	tempele.appendChild(offerItem("Lunch Sets: 01:00PM~02:00PM", "orange"));

	subTitle.textContent = "We offer discounted sets on:";

	container.appendChild(subTitle);
	container.appendChild(tempele);

	return container;
}

function about() {
	let element = document.createElement("div");
	let tempele = document.createElement("div");
	let innerElement = document.createElement("div");

	innerElement.classList.add("about");
	innerElement.innerHTML = `<div>Family Dinner, Traditional kitchen. We offer food made by experienced chefs.</div>`;

	innerElement.appendChild(whatWeoffer());

	let h1Text = document.createElement("h1");
	h1Text.textContent = "About";

	tempele.appendChild(innerElement);
	element.appendChild(h1Text);
	element.appendChild(tempele);
	return element;
}

export default about;
