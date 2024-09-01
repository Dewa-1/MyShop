import { updateCart } from "./updatecart";
import { getProductLS } from "./getProducts";



getProductLS();
export const addToCart = (event, id, stock) => {

    let arrLocalStorageProducts = getProductLS();

    let currentcard = document.getElementById(`card ${id}`);

    let quantity = currentcard.querySelector("#prod-quant").textContent;

    let price = currentcard.querySelector("#pro-price").textContent;

    price = price.replace("₹", "");


    let existingProd = arrLocalStorageProducts.find((currprod) => {
        return currprod.id === id;
    });

    if (existingProd) {
        alert("Duplicate Product");
        return false;
    }



    price = Math.round(price * quantity);
    price = Number(price);

    quantity = Number(quantity);


    arrLocalStorageProducts.push({ id, quantity, price });

    localStorage.setItem("CartProdLS", JSON.stringify(arrLocalStorageProducts));


    updateCart(arrLocalStorageProducts);

}