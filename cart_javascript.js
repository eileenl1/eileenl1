//javascript functionality for shoppingcart html

//create objects filled in with info from cart and display on cart page
function fillCart() {
    let cartArray = JSON.parse(window.localStorage.getItem("cart"));
    for (let i = 0; i < cartArray.length; i++) {
        let cartContent = document.getElementById('cartContent');
        //innerhtml text, fills in respective color, material, and quantity of product
        //includes remove item function for button in REMOVE ITEM button
        cartContent.innerHTML += `<div class="cartbox">
        <a href="productbrowsing.html">
               <img src="basiccouch2.png" alt="couch pillow" style="width:250px;height:250px;">
        </a>
        <div>
        <p class="cartdesgray">Color: </p>
        <p class="cartdes">${cartArray[i].myNewItem.color} </p>
        <p class="cartdesgray">Material:</p>
        <p class="cartdes">${cartArray[i].myNewItem.material} </p>
        </div>

        <div>
        <p class="cartdesgray">Quantity:</p>
        <p class="cartdes">${cartArray[i].myNewItem.quantity} </p>
        </div>

        <div>
            <p class="cartdes">$15.00 </p>
            <button type="button" class="removebutton" onClick="removeItem(event)" value=${i}>REMOVE ITEM</button>
        </div>
        <hr class="hr">
        </hr>
        </div>`
    }
}

//function for calculating total + shipping
//use innerhtml for displaying cart price total & subtotal
function calculatePrice() {
    let cartArray = JSON.parse(window.localStorage.getItem("cart"));
    subtotalprice.innerHTML = `<div>
    $${cartArray.length*15.00}.00
    <div>`
    totalprice.innerHTML = `<div>
    $${(cartArray.length*15.00)+6.00}.00
    <div>`
}

//.removebutton removes the item from the shopping cart page on click
function removeItem(event) {
    let cartArray = JSON.parse(window.localStorage.getItem("cart"));
    // get position # of item in array
    cartArray.splice(event.target.value, 1);
    let parentDiv = event.target.parentNode.parentNode;
    //remove and update item 
    let cartContent = document.getElementById("cartContent");
    cartContent.removeChild(parentDiv);
    window.localStorage.setItem("cart", JSON.stringify(cartArray));
}