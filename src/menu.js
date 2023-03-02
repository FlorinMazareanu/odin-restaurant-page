console.log("menu.js is running");

function generateMenuElements() {
    console.log("FFF generating menu elements...");
    const contentElem = document.getElementById("content");
    contentElem.classList.remove("hidden-content");

    const testElem = document.createElement("h1");
    contentElem.appendChild(testElem);
    testElem.textContent = "menu test";
}
export {generateMenuElements};