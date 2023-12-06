import '../CSS/style.css';
import goodman_1 from '../Images/Olimpic-cyclist.jpg'
import goldman_1 from '../Images/Happymullet.jpg'
import chickman_1 from '../Images/Chickman.jpg'

function createCard(name,number,image){
    let tempele = document.createElement('div');
    let newImage = new Image();
    let text_contact = document.createElement('div');


    text_contact.classList.add("credentials");
    text_contact.appendChild(document.createElement('p')).appendChild(document.createTextNode(`Name: ${name}`));
    text_contact.appendChild(document.createElement('p')).appendChild(document.createTextNode(`Number: ${number}`));


    newImage.classList.add("contactImg")
    newImage.src = image;
    tempele.classList.add('contactcard')


    tempele.appendChild(newImage);
    tempele.appendChild(text_contact);

    
    return tempele;
}

function contact(){
    let element = document.createElement('div');
    let optionText = document.createElement('h1');
    optionText.innerHTML = "Contact"
    element.appendChild(optionText);

    let mainclass = document.createElement('div');
    mainclass.classList.add("contact")
    element.appendChild(mainclass);


    mainclass.appendChild(createCard("კეთილი კაცი",555,goodman_1));
    mainclass.appendChild(createCard("ოქრო კაცი ",555,goldman_1));
    mainclass.appendChild(createCard("ნაშა კაცი ",555,chickman_1));

    return element;
}

export default contact;