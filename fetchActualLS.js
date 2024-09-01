import { getProductLS } from "./getProducts";

export const fetchLSdata = (id, price) => {
    let cartprod = getProductLS();
    let existingProd = cartprod.find((currprod) => currprod.id === id);
    let quantity = 1;

    if (existingProd) {
        quantity = existingProd.quantity;
        price = existingProd.price;
    }

    return { quantity, price };
};