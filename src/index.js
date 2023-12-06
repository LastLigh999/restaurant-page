import menu from './pages/menu.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
import './CSS/style.css';
import rocket from './Images/Rocket.svg';

const mainContainer = document.getElementById("content");
const headerText = document.querySelector("header").querySelector("div");
const buttons = document.querySelector("#buttons").querySelectorAll('li');

var currentButton = "about";

for(let i = 0; i < buttons.length;i++){
    buttons[i].addEventListener('click',(e) =>{
        currentButton = e.target.id;
        compile();
    })
}

function firstCompile() {
    //rocket picture
    let picture = new Image();
    picture.src = rocket;
    picture.style.height = "80%";
    headerText.insertBefore(picture, headerText.firstChild);

    //create new element
    const mainElement = document.createElement('div');
    //change content of inner html
    mainElement.innerHTML = about().innerHTML;
    mainElement.classList.add('contentBody');
    mainElement.id = "maincontent";
    //add before footer
    mainContainer.insertBefore(mainElement,mainContainer.querySelector('footer'));
}

function compile(){
    const mainElement = document.querySelector("#maincontent");
    switch(currentButton){
        case "about":
            mainElement.innerHTML = about().innerHTML;
            break;
        case "menu":
            mainElement.innerHTML = menu().innerHTML;
            break;
        case "contact":
            mainElement.innerHTML = contact().innerHTML;
            break;    
        default:
            console.log("not default");
    }
}

firstCompile();