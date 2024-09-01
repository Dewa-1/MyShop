import { getProductLS } from "./getProducts";
import { updateCart } from "./updatecart";

export const RemoveProd = (id) => {
    let cartprod = getProductLS();
    cartprod = cartprod.filter((currprod) => currprod.id !== id);

    localStorage.setItem("CartProdLS", JSON.stringify(cartprod));

    let remodiv = document.getElementById(`cartCard${id}`);

    if (remodiv) {
        remodiv.remove();
    }
    updateCart(cartprod);
};