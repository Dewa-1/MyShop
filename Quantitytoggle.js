export const QuantityToggle = (event, id, stock) => {

    const currentcard = document.getElementById(`card ${id}`); // ek particular card ko target krne k liye


    let prodQuant = currentcard.querySelector(".prod-quant"); // P tag jisme actual value hai uss element ko target krne k liye


    let quantity = parseInt(prodQuant.getAttribute("data-quantity")) || 1; // get-attribute element ki id, class, aur kaafi properties ko access kr skta hai
    // set-attribute element ki properties ko change krta hai dynamically


    if (event.target.id === "pro-increment") {
        if (quantity < stock) {
            quantity += 1
        } else if (quantity === stock) {
            quantity = stock;
        }
    }

    if (event.target.id === "pro-decrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    prodQuant.innerText = quantity; // Actual value ko update krne k liye
    prodQuant.setAttribute("data-quantity", quantity); // dynamically value set krne k liye
    return quantity;
}