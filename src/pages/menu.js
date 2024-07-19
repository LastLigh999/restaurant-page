import "../CSS/style.css";
import food1 from "../Images/Menu/food1.jpg";
import food2 from "../Images/Menu/food2.jpg";
import food3 from "../Images/Menu/food3.jpg";
import food4 from "../Images/Menu/food4.jpg";
import food5 from "../Images/Menu/food5.jpg";
import food6 from "../Images/Menu/food6.jpg";
import food7 from "../Images/Menu/food7.jpg";
function menuItemCard(image, name) {
	let tempele = document.createElement("div");
	tempele.classList.add("menucard");

	let img = new Image();
	img.src = image;
	img.style.height = "250px";
	img.style.width = "350px";

	tempele.appendChild(img);

	let text = document.createElement("p");
	text.appendChild(document.createTextNode(`${name}`));

	tempele.appendChild(text);

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

	mainclass.appendChild(menuItemCard(food1, "Chicken salad"));
	mainclass.appendChild(menuItemCard(food2, "Xhinkali"));
	mainclass.appendChild(menuItemCard(food3, "Cream puffs"));
	mainclass.appendChild(menuItemCard(food4, "Smoked beef"));
	mainclass.appendChild(menuItemCard(food5, "Sasuage"));
	mainclass.appendChild(menuItemCard(food6, "Skewered pork"));
	mainclass.appendChild(menuItemCard(food7, "Olives"));
	return element;
}

export default menu;
