// javascript functionality for productdescription html

var selectedItem = {};

// updating color and material selection on product descrip page
function updateDetails(event) {
    var className = event.target.className;
    // get material
    if (className === "matbutton") {
        var elements = document.getElementsByClassName("matbutton selected");
        if (elements.length !== 0) {
            elements[0].classList.remove("selected");
        }
        selectedItem["material"] = event.target.value;
    } else {
    // get color
        var elements = document.getElementsByClassName("colbutton selected");
        if (elements.length !== 0) {
            elements[0].classList.remove("selected");
        }
        selectedItem["color"] = event.target.value;
    }
    event.target.classList.add("selected");
}

function addToCart() {
    let cartArray = JSON.parse(window.localStorage.getItem("cart")) || [];
    console.log(cartArray);
    //add new object with selections and quantity
    let myNewItem = {
        color: selectedItem["color"],
        material: selectedItem["material"],
        quantity: 1
    };
    cartArray.push({myNewItem});
    window.localStorage.setItem("cart", JSON.stringify(cartArray));
    //updating cart number
    document.getElementById("displayCartNum").innerHTML = cartArray.length;
    console.log(cartArray[0].myNewItem.color);
}

// clicking cart button adds to cart
let cartButton = document.getElementById("cartButton");
cartButton.onclick = addToCart;