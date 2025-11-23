import { DigitalProduct } from "./models/DigitalProduct.js";
import { physicalProduct } from "./models/PhysicalProduct.js";
import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";
const inventory = [
    new physicalProduct("Macbook Air", 800, "PHYSICAL768653", 2.5),
    new physicalProduct("Shoes", 85, "PHYSICAL793478", 0.5),
    new DigitalProduct("Microsoft Office", 70, "DIGITAL983749", 5),
    new DigitalProduct("Netflix", 20, "DIGITAL983749", 8),
];
for (const item of inventory) {
    console.log(item.displayDetails());
    const finalPrice = calculateTax(item);
    console.log(`Final price with tax: $${finalPrice.toFixed(2)}`);
}
//# sourceMappingURL=main.js.map