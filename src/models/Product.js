export class Product {
    name;
    price;
    sku;
    constructor(name, price, sku) {
        this.name = name;
        this.price = price;
        this.sku = sku;
    }
    displayDetails() {
        return `${this.name} costs $${this.price} and is ${this.sku}`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
//# sourceMappingURL=Product.js.map