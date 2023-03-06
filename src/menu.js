console.log("menu.js is running");

function generateMenuElements() {
    console.log("FFF generating menu elements...");
    const contentElem = document.getElementById("content");
    contentElem.classList.remove("hidden-content");
    contentElem.classList.add("content-background");
    
    
    for (let i=0; i<=4; i++) {

        let menuItemContainer = document.createElement("div");
        contentElem.appendChild(menuItemContainer);
        menuItemContainer.classList.add("menu-item-container");

        let menuItemTitle = document.createElement("h2");
        menuItemContainer.appendChild(menuItemTitle);
        menuItemContainer.id = "menu-item-" + i;
        menuItemTitle.classList.add("menu-item-title");

        let menuItemDetails = document.createElement("div");
        menuItemContainer.appendChild(menuItemDetails);
        menuItemDetails.classList.add("menu-item-details");

        let menuItemDescription = document.createElement("p");
        menuItemDetails.appendChild(menuItemDescription);
        menuItemDescription.classList.add("menu-item-description");

        let menuItemPrice = document.createElement("p");
        menuItemDetails.appendChild(menuItemPrice);
        menuItemPrice.classList.add("menu-item-price");

        switch (i) {
            /*
            case 0:
                {
                    menuItemTitle.innerHTML = "Cannoli";
                    menuItemDescription.innerHTML = "We specialize in cannoli.Try it out!";
                    menuItemPrice.innerHTML = "12.5 $";
                }
            break;
            */
            case 1:
                {
                    menuItemTitle.innerHTML = "Pancakes";
                    menuItemDescription.innerHTML = "Can never go wrong with our pancakes";
                    menuItemPrice.innerHTML = "17.99 $";
                }
            break;
            case 2:
                {
                    menuItemTitle.innerHTML = "Croissant";
                    menuItemDescription.innerHTML = "Are you going to finish that croissant? Of course you will";
                    menuItemPrice.innerHTML = "15.25 $";
                }
            break;
            case 3:
                {
                    menuItemTitle.innerHTML = "Apple pie";
                    menuItemDescription.innerHTML = "This one is a classic";
                    menuItemPrice.innerHTML = "24.99 $";
                }
            break;
            case 4:
                {
                    menuItemTitle.innerHTML = "Lava cake";
                    menuItemDescription.innerHTML = "This lava cake has extra chocolate and is guaranteed to make you want another one.";
                    menuItemPrice.innerHTML = "35.00 $";
                }
            break;
            default:
                console.log("default");
        }

    }
}
export {generateMenuElements};