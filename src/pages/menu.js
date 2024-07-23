import "../CSS/style.css";
import food1 from "../Images/Menu/food1.jpg";
import food2 from "../Images/Menu/food2.jpg";
import food3 from "../Images/Menu/food3.jpg";
import food4 from "../Images/Menu/food4.jpg";
import food5 from "../Images/Menu/food5.jpg";
import food6 from "../Images/Menu/food6.jpg";
import food7 from "../Images/Menu/food7.jpg";

let menuItems = {
	chickenSalad: {
		picture: food1,
		price: "10.00$",
		contains: "chcicken Breast, Mayoneisse, Black pepper, Bell paper.",
	},
	khikali: {
		picture: food2,
		price: "2$",
		contains: "Wheat flour, pork and beef mixed ground meat",
	},
	creamPuff: {
		picture: food3,
		price: "2$",
		contains: "Milk cream, Suggar, Wheat flour, Eggs",
	},
	smokedPorkMeat: {
		picture: food4,
		price: "30$",
		contains: "Pork thigh",
	},
	sasuage: {
		picture: food5,
		price: "17$",
		contains:
			"Mixed meat pork and beef, Peprika, Onion, Pomegranate, Black papper",
	},
	skeweredMeat: {
		picture: food6,
		price: "25$",
		contains: "Pork meat, Onion, Pomegranate, Black pepper, Garlic powder",
	},
	olives: {
		picture: food7,
		price: "5$",
		contains: "Olives",
	},
};

let activeElement = null;

function menuItemCard(object, name) {
	let tempele = document.createElement("div");
	tempele.classList.add("menucard");
	let text_items = document.createElement("div");
	let ingredients = document.createElement("div");
	ingredients.classList.add("ingredients");
	let copytext = name;

	ingredients.textContent = object.contains;

	copytext = copytext.charAt(0).toUpperCase() + copytext.slice(1);

	let img = new Image();
	img.src = object.picture;
	img.style.height = "250px";
	img.style.width = "clamp(300px,100%, 450px)";

	tempele.appendChild(img);

	let text = document.createElement("p");
	text.appendChild(document.createTextNode(`${copytext}`));
	let price = document.createElement("p");
	price.textContent = object.price;

	text_items.appendChild(text);
	text_items.appendChild(price);

	tempele.appendChild(text_items);
	tempele.appendChild(ingredients);
	/* 
	console.log("Adding event listener to: ", copytext); */

	tempele.addEventListener("click", () => {
		console.log("Card clicked: ", copytext);
		if (activeElement && activeElement !== tempele) {
			activeElement.classList.remove("active");
		}

		if (activeElement === tempele) {
			tempele.classList.remove("active");
			activeElement = null;
		} else {
			tempele.classList.add("active");
			activeElement = tempele;
		}
	});

	return tempele;
}

function menu() {
	let element = document.createElement("div");
	let optionText = document.createElement("h1");
	optionText.innerHTML = "Menu";
	element.appendChild(optionText);

	let classcontainer = document.createElement("div");

	let mainclass = document.createElement("div");
	classcontainer.classList.add("menu");
	classcontainer.appendChild(mainclass);
	element.appendChild(classcontainer);
	for (let item in menuItems) {
		mainclass.appendChild(menuItemCard(menuItems[item], item));
	}
	return element;
}

export default menu;
