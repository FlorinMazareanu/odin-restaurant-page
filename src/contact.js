console.log("contact.js is running");

function generateContactElements() {
    console.log("FFF generating contact elements...");
    const contentElem = document.getElementById("content");
    contentElem.classList.remove("hidden-content");
    contentElem.classList.add("content-background");

    const testElem = document.createElement("h3");
    contentElem.appendChild(testElem);
    testElem.textContent = "Why would a personal project for a non-existant restaurant have contact details? :)";
}
export {generateContactElements};