import { Product } from "./Product.ts";

export class DigitalProduct extends Product {
    constructor(
        name: string,
        price: number,
        sku: string,
        public fileSize: number
    ) {
        super(name, price, sku); // matches base class
    }

    // Digital products have 0 taxes
    getPriceWithTax(): number {
        return this.price;
    }

    // Formats file size in MB
    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }

    override displayDetails(): string {
        return `${super.displayDetails()}, File Size: ${this.formattedFileSize}`;
    }
}