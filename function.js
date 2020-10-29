// javascript functionality for html

var cartInfo = [];
var selectedItem;

// updating color and material selection on product descrip page
function updateDetails(event) {
    var className = event.target.className;
    if (className === "matbutton") {
        var elements = document.getElementsByClassName("matbutton selected");
        if (elements.length !== 0) {
            elements[0].classList.remove("selected");
        }
    } else {
        var elements = document.getElementsByClassName("colbutton selected");
        if (elements.length !== 0) {
            elements[0].classList.remove("selected");
        }
    }
    event.target.classList.add("selected");
    var selectedOption = event.target.value;
    // logs color and mat to variable
    selectedItem = {color: selectedOption, material: selectedOption};
    var retrieveCart = window.localStorage.getItem('cartInfo');
}

function addToCart() {
    //store info of item selected: color and material selection
    cartInfo.push(selectedItem);
    window.localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
    //updating cart number
    document.getElementById("displayCartNum").innerHTML = cartInfo.length;
    console.log(cartInfo);
}

// clicking cart button adds to cart
let cartButton = document.getElementById("cartButton");
cartButton.onclick = addToCart;