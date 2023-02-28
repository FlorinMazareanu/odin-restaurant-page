//index.js is the starting point for webpack modules
//it requires the home, menu and contact modules
//and they all get minified in dist/main.js

//importing the three sections:
const homeModule = require("./home");
const menuModule = require("./menu");
const contactModule = require("./contact");

console.log("index.js is running...");

//function to delete all elements in "content"
// so they can be generated again at home/menu/contact toggle
function clearContent() {
    console.log("-------");
    console.log("clearing the elemnts in content...");
    const contentElem = document.getElementById("content");
    contentElem.innerHTML = "";
}

//generating the toggler buttons for home, main and contact
//adding event listeners to clear the elements from id="content"
//and to generate elements
const homeButtonElem = document.getElementById("home-button");
homeButtonElem.addEventListener("pointerdown", () => {clearContent(); homeModule.generateHomeElements();});

const menuButtonElem = document.getElementById("menu-button");
menuButtonElem.addEventListener("pointerdown", () => {clearContent(); menuModule.generateMenuElements();});

const contactButtonElem = document.getElementById("contact-button");
contactButtonElem.addEventListener("pointerdown", () => {clearContent(); contactModule.generateContactElements();});




