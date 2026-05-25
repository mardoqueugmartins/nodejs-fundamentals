// Jeito antigo de importar:

// const { createProduct, Product, productPrice } = require("./product")



//  Jeito moderno de importar:

import {createProduct, Product, productPrice} from "./product.js";

const product = createProduct(1, "Macbook", 5000);

const product2 = new Product(2, "Iphone", 1500);

console.log(product.getInfo());
console.log(product2.getInfo());