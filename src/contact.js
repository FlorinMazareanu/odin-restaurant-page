console.log("contact.js is running");

function generateContactElements() {
    console.log("FFF generating contact elements...");
    const contentElem = document.getElementById("content");
    contentElem.classList.remove("hidden-content");

    const testElem = document.createElement("h1");
    contentElem.appendChild(testElem);
    testElem.textContent = "contact test";
}
export {generateContactElements};