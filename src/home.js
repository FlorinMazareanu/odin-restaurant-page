console.log("home.js is running");

function generateHomeElements() {
    console.log("FFF generating home elements...");
    const contentElem = document.getElementById("content");
    contentElem.classList.remove("hidden-content");
    contentElem.classList.remove("content-background");
}
export {generateHomeElements};


