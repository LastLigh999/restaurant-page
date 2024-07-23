import "../CSS/style.css";
import image1 from "../Images/About/indoors-image.jpg";
import image2 from "../Images/About/outdoors-image.jpg";
import image3 from "../Images/About/cooking-image.jpg";

let currentIndex = 0;
let intervalId;
//function mainContent
function image(link) {
	let tempele = document.createElement("img");
	tempele.src = link;
	return tempele;
}

function imageGalleryText(title, text) {
	let tempele = document.createElement("div");
	tempele.classList.add("aboutContent");
	let h1Title = document.createElement("h1");
	h1Title.textContent = title;
	tempele.appendChild(h1Title);
	let textContent = document.createElement("div");
	textContent.textContent = text;
	tempele.appendChild(textContent);

	return tempele;
}

function imageGalleryObject(link, title, text, active = true) {
	let tempele = document.createElement("div");

	tempele.classList.add("imageGal");
	active == true
		? tempele.classList.toggle("inactive", !active)
		: tempele.classList.toggle("inactive", !active);

	tempele.appendChild(image(link));
	tempele.appendChild(imageGalleryText(title, text));

	return tempele;
}

function imageGallery() {
	let tempele = document.createElement("div");
	tempele.appendChild(
		imageGalleryObject(
			image1,
			"Indoors Lounge",
			"Our bistro offers a calm and pleasant environment, perfect for relaxing and enjoying a meal. On weekends, we enhance this experience with live music performances by different amateur singers. These performances start after 9:00 PM, creating a delightful atmosphere for our guests to unwind and enjoy their evening. Whether you're looking for a quiet dinner or a night out with friends, our bistro is the ideal place to be"
		)
	);
	tempele.appendChild(
		imageGalleryObject(
			image2,
			"Outdoors space",
			"At our bistro, you can enjoy our outdoor space with beautiful scenery and fresh air. It's the perfect place for a romantic dinner or just to relax and enjoy the outdoors. Picture yourself dining outside, surrounded by nature, while you enjoy our delicious food and drinks. Come see why our bistro is a great spot to unwind and connect with others in a lovely outdoor setting.",
			false
		)
	);
	tempele.appendChild(
		imageGalleryObject(
			image3,
			"Kitchen",
			"At our bistro, our biggest selling point is our food. Our experienced chefs take pride in preparing the best dishes for you in a clean and welcoming environment. Each meal is crafted with care and attention to detail, ensuring that every bite is delicious. Our menu features a variety of options, all made from high-quality ingredients. Whether you're here for a quick lunch or a special dinner, you'll find something to love. Come and experience the exceptional food and warm atmosphere that make our bistro a favorite spot for many.",
			false
		)
	);

	return tempele;
}

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

function aboutInfoParagraph(text) {
	let tempele = document.createElement("p");
	tempele.innerHTML = text;
	return tempele;
}

function paragraphContainer(texts) {
	let tempele = document.createElement("div");
	tempele.classList.add("paragraphContainer");
	for (let text of texts) {
		tempele.appendChild(aboutInfoParagraph(text));
	}
	return tempele;
}

function about() {
	let element = document.createElement("div");
	let tempele = document.createElement("div");
	let innerElement = document.createElement("div");
	currentIndex = 0;

	if (intervalId) {
		clearInterval(intervalId);
	}
	innerElement.classList.add("about");
	innerElement.innerHTML = `<h2>Bistro RocketAelly.</h2>
	`;

	innerElement.appendChild(
		paragraphContainer([
			"Welcome to Bistro RocketAlley, a cornerstone of culinary excellence nestled in the heart of [City]. Founded on [Founding Date], our establishment has been a beacon of warmth and hospitality for over a decade. From the day we opened our doors, we've had the pleasure of serving countless guests, each leaving with a memorable dining experience.",
			"Our journey began with a simple yet profound vision: to create a place where people could come together to enjoy exceptional food in a welcoming and vibrant atmosphere. We believe that dining is not just about the food on the plate but also about the experience, the ambiance, and the connections made around the table. This philosophy has guided us since our inception and continues to be the cornerstone of our success.",
		])
	);

	innerElement.appendChild(imageGallery());

	innerElement.appendChild(
		paragraphContainer([
			"As we look to the future, we remain committed to upholding the high standards that have defined Bistro RocketAlley from the beginning. We are continually evolving, seeking new ways to enhance our menu, improve our service, and provide an exceptional dining experience.",
			"As we look to the future, we remain committed to upholding the high standards that have defined Bistro RocketAlley from the beginning. We are continually evolving, seeking new ways to enhance our menu, improve our service, and provide an exceptional dining experience.",
		])
	);

	innerElement.appendChild(whatWeoffer());

	let h1Text = document.createElement("h1");
	h1Text.textContent = "About";

	tempele.appendChild(innerElement);
	element.appendChild(h1Text);
	element.appendChild(tempele);
	intervalId = setInterval(animateGallery, 10000);
	return element;
}

function animateGallery() {
	let array = document.querySelectorAll(".imageGal");

	array[currentIndex].classList.toggle("transitioning", true);
	setTimeout(() => {
		array[currentIndex].classList.toggle("inactive", true);
		array[currentIndex].classList.toggle("transitioning", false);
		currentIndex = (currentIndex + 1) % array.length;
		array[currentIndex].classList.toggle("inactive", false);
	}, 300);
}

export default about;
