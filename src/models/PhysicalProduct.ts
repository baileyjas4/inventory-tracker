import { Product } from "./Product.js"

export class physicalProduct extends Product {
    constructor (
        name: string, 
        price: number,
        sku: string, 
        public weight: number 
    ){
        super(name, price ,sku);
    }
    
    //  this is the formats weight 

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

   // return to get price with tax you're adding the price and then multiplying by .10

    getPriceWithTax(): number {
        return this.price + (this.price * .10);
    }

    override displayDetails(): string {
    return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
    }
}