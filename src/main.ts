import { DigitalProduct } from "./models/DigitalProduct.ts";
import { physicalProduct } from "./models/PhysicalProduct.ts";
import { Product } from "./models/Product.ts";
import { calculateTax } from "./utils/taxCalculator.ts";


const inventory: Product[] = [
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