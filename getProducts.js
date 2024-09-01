import { updateCart } from "./updatecart";


export const getProductLS = () => {
    let cartProducts = localStorage.getItem("CartProdLS");

    if (!cartProducts) {
        return [];
    }

    cartProducts = JSON.parse(cartProducts);

    updateCart(cartProducts);
    return cartProducts;
}