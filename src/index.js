//index.js is the starting point for webpack modules
//it requires the home, menu and contact modules
//and they all get minified in dist/main.js

//importing the three sections:
/*
const homeModule = require("./home");
const menuModule = require("./menu");
const contactModule = require("./contact");
*/

import * as homeModule from '../src/home';
import * as menuModule from '../src/menu';
import * as contactModule from '../src/contact';


console.log("index.js is running...");

//function to clear all elements in "content"
// so they can be generated again at home/menu/contact toggle
function clearContent() {
    console.log("-------");
    console.log("clearing the elemnts in content...");
    const contentElem = document.getElementById("content");
    contentElem.textContent = "";
}

//home is the default toggled section
homeModule.generateHomeElements();

//generating the toggler <li> for home, main and contact
//adding event listeners to clear the elements from id="content"
//and to generate elements
const homeLiElem = document.getElementById("home-li");
homeLiElem.addEventListener("pointerdown", () => {clearContent(); homeModule.generateHomeElements();});

const menuLiElem = document.getElementById("menu-li");
menuLiElem.addEventListener("pointerdown", () => {clearContent(); menuModule.generateMenuElements();});

const contactLiElem = document.getElementById("contact-li");
contactLiElem.addEventListener("pointerdown", () => {clearContent(); contactModule.generateContactElements();});




