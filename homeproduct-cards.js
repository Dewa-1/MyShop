import { addToCart } from "./addCart";
import { QuantityToggle } from "./Quantitytoggle";

const storeTemp = document.getElementById("storeTemplate"); // Template container
const prodCo = document.getElementById("prodContainer"); //Only bda wala container 


export const showProductContainer = (prod) => {
    if (!prod) {
        alert("No data");
    }

    prod.forEach((currvalue) => {
        const { name, category, price, stock, description, image, id } = currvalue; //Serving as key

        const tempClone = document.importNode(storeTemp.content, true); // yha pe sara template elements ka copy bn gya
        tempClone.getElementById("productName").textContent = name;
        tempClone.getElementById("pro-desc").textContent = description;
        tempClone.getElementById("category").textContent = category;
        tempClone.getElementById("product-img").src = image;
        tempClone.getElementById("pro-price").textContent = `₹ ${price}`;
        tempClone.getElementById("del-Aprice").textContent = `₹${price*4}`;
        tempClone.getElementById("stocks").textContent = stock;



        tempClone.getElementById("cardvalue").setAttribute("id", `card ${id}`);

        ///////// Isse Kitni bhi quantity select kr skte hn //////////////
        tempClone.getElementById("adjs").addEventListener("click", (event) => {
            QuantityToggle(event, id, stock);
        });

        tempClone.getElementById("addcart").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        })

        prodCo.append(tempClone);
    });
};