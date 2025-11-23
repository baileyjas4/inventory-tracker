import { Product } from "./Product.js";
export declare class DigitalProduct extends Product {
    fileSize: number;
    constructor(name: string, price: number, sku: string, fileSize: number);
    getPriceWithTax(): number;
    get formattedFileSize(): string;
    displayDetails(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map