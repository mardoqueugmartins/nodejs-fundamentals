class Product {
    constructor (id, name, price) {
        this.name = name;
        this.id = id;
        this.price = price;

    }
    getInfo() {
        return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
    }
}

function createProduct (id, name, price) {
    return new Product(id, name, price);
}

module.exports = {
    createProduct, Product,
};