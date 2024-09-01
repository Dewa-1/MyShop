import prod from "./api/pro.json";
import { fetchLSdata } from "./fetchActualLS";
import { getProductLS } from "./getProducts";
import { RemoveProd } from "./RemoveProd";

let cartprod = getProductLS(); // Local storage data

let filterproducts = prod.filter((currprod) => { // Filtering based on local storage data
    return cartprod.some((currelem) => currelem.id === currprod.id);
});

let cartTemplate = document.getElementById("cartTemplate");

let cartContainer = document.getElementById("cartContainer");

const showcart = () => {
    filterproducts.forEach((currvalue) => {
        const { name, category, price, image, id } = currvalue;

        const cartclone = document.importNode(cartTemplate.content, true); // Clone template

        const lsActualdata = fetchLSdata(id, price);

        let lsprice = lsActualdata.price;

        cartclone.getElementById("category").textContent = category;
        cartclone.getElementById("productName").textContent = name;
        cartclone.getElementById("product-img").src = image;
        cartclone.getElementById("pro-price").textContent = `₹ ${lsprice}`;
        cartclone.getElementById("prod-quant").textContent = lsActualdata.quantity;

        cartclone.getElementById("cardvalue").setAttribute("id", `cartCard${id}`);


        // Correctly setting up the event listener for the remove button
        cartclone.querySelector(".rbatan").addEventListener("click", () => RemoveProd(id));

        cartContainer.append(cartclone);
    });
};

showcart();