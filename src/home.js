console.log("home.js is running");

function generateHomeElements() {
    console.log("FFF generating home elements...");
    const contentElem = document.getElementById("content");
    contentElem.classList.remove("hidden-content");

    const testElem = document.createElement("h1");
    contentElem.appendChild(testElem);
    testElem.textContent = "home test";
}
export {generateHomeElements};


