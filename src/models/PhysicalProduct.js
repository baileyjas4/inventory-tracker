import { Product } from "./Product.js";
export class physicalProduct extends Product {
    weight;
    constructor(name, price, sku, weight) {
        super(name, price, sku);
        this.weight = weight;
    }
    //  this is the formats weight 
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    // return to get price with tax you're adding the price and then multiplying by .10
    getPriceWithTax() {
        return this.price + (this.price * .10);
    }
    displayDetails() {
        return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map