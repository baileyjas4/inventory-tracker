import { Product } from "./Product.js";
export declare class physicalProduct extends Product {
    weight: number;
    constructor(name: string, price: number, sku: string, weight: number);
    get formattedWeight(): string;
    getPriceWithTax(): number;
    displayDetails(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map