const cartvalue = document.getElementById("cartvalue")

export const updateCart = (cartproducts) => {
    return (cartvalue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartproducts.length}</i>`);


}