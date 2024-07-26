import "../CSS/style.css";
import call from "../Images/contact/call.svg";
import location from "../Images/contact/location.svg";
import time from "../Images/contact/time.svg";

function createCard(symbol, text) {
	let tempele = document.createElement("div");
	tempele.classList.add("contactcard");

	let image = document.createElement("img");
	image.src = symbol;
	image.alt = "number";

	tempele.appendChild(image);
	tempele.appendChild(document.createTextNode(text));

	return tempele;
}

function contact() {
	let element = document.createElement("div");
	let optionText = document.createElement("h1");
	optionText.innerHTML = "Contact";
	element.appendChild(optionText);

	let mainclass = document.createElement("div");
	mainclass.classList.add("contact");
	element.appendChild(mainclass);
	mainclass.appendChild(createCard(call, "(222) 555-12-34-56"));
	mainclass.appendChild(
		createCard(
			location,
			"The Savory Spoon, 456 Flavor Street, Yumsville, Gastronomia, 98765, Wonderland"
		)
	);
	mainclass.appendChild(createCard(time, "Open 24/7"));

	return element;
}

export default contact;
