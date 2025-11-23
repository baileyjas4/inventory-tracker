import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    fileSize;
    constructor(name, price, sku, fileSize) {
        super(name, price, sku); // matches base class
        this.fileSize = fileSize;
    }
    // Digital products have 0 taxes
    getPriceWithTax() {
        return this.price;
    }
    // Formats file size in MB
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    displayDetails() {
        return `${super.displayDetails()}, File Size: ${this.formattedFileSize}`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map