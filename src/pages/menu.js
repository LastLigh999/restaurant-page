import "../CSS/style.css";
import food0 from "../Images/Menu/food0.jpg";
import food1 from "../Images/Menu/food1.jpg";
import food2 from "../Images/Menu/food2.jpg";
import food3 from "../Images/Menu/food3.jpg";
import food4 from "../Images/Menu/food4.jpg";
import food5 from "../Images/Menu/food5.jpg";
import food6 from "../Images/Menu/food6.jpg";
import food7 from "../Images/Menu/food7.jpg";
import food8 from "../Images/Menu/cesar-salad.jpg";
import food9 from "../Images/Menu/tomato-Onion.jpg";

let menuItems = {
	adjaruliKhachapuri: {
		name: "Adjaruli Khachapuri",
		picture: food0,
		price: "15.00$",
		contains: "raw eggs, cheese, butter, wheat flour",
	},
	chickenSalad: {
		name: "Chicken Salad",
		picture: food1,
		price: "10.00$",
		contains: "chcicken Breast, Mayoneisse, Black pepper, Bell paper.",
	},
	khikali: {
		name: "Khinkali",
		picture: food2,
		price: "2$",
		contains: "Wheat flour, pork and beef mixed ground meat",
	},
	creamPuff: {
		name: "Cream Puff",
		picture: food3,
		price: "2$",
		contains: "Milk cream, Suggar, Wheat flour, Eggs",
	},
	smokedPorkMeat: {
		name: "Smoked Pork Meat",
		picture: food4,
		price: "30$",
		contains: "Pork thigh",
	},
	sasuage: {
		name: "Sausage",
		picture: food5,
		price: "17$",
		contains:
			"Mixed meat pork and beef, Peprika, Onion, Pomegranate, Black papper",
	},
	skeweredMeat: {
		name: "Skewered Pork Meat",
		picture: food6,
		price: "25$",
		contains: "Pork meat, Onion, Pomegranate, Black pepper, Garlic powder",
	},
	olives: {
		name: "Olives",
		picture: food7,
		price: "5$",
		contains: "Olives",
	},
	cesar: {
		name: "Cesar Salad",
		picture: food8,
		price: "20.00$",
		contains:
			"Bazel, Chicken breast, Bread crumbs, Olives, Lettuce, Vinegar, Grated parmejan",
	},
	tomatoSalad: {
		name: "Tomato Salad",
		picture: food9,
		price: "10.00$",
		contains: "Tomato, Onion, Bazel, Olive oil",
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

	let img = new Image();
	img.src = object.picture;
	img.style.height = "250px";
	img.style.width = "clamp(300px,100%, 450px)";

	tempele.appendChild(img);

	let text = document.createElement("p");
	text.appendChild(document.createTextNode(`${object.name}`));
	let price = document.createElement("p");
	price.textContent = object.price;
	price.style.color = "#c5e90b";
	price.style.textShadow = "5px 5px 1px #26580f";

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
