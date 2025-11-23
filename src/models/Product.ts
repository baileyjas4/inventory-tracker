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
        return `${this.name} costs $${this.price} and is ${this.sku}`;
    }
    
    getPriceWithTax(): number {
        return this.price;
    }
}


