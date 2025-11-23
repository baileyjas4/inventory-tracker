export class Product {
    name: string;
    price: number;
    sku: string;

    constructor(name: string, price: number, sku: string,) {
        this.name = name;
        this.price = price;
        this.sku = sku;
    }
    displayDetails(): string {
        return `${this.name} costs $${this.price} and is ${this.sku}`
    }
    // getPriceWithTax()
}
const product1 = new Product("shirt", 20, "KWS");
console.log(product1.displayDetails());

getPrice(): number {
  return this.price * (this.taxRate + 1);
}
updatePrice(pretaxPrice: number) {
  this.price = pretaxPrice;
}