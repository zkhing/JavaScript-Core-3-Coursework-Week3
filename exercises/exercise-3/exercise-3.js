let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log("QTY ITEM        TOTAL");

for(const {quantity, itemName, unitPrice} of order){
      console.log(`${quantity}   ${itemName}   ${(quantity * unitPrice).toFixed(2)}`);
}

let sum = 0;
for (const {quantity, unitPrice} of order) { 
    sum += quantity * unitPrice;
}
 console.log("Total: " + sum);

 //CYF SOLUTION

// function pad(value, width) {
//   return value.toString().padEnd(width, " ");
// }

// function printRow(quantity, itemName, totalPrice) {
//   console.log(`${pad(quantity, 50)} ${pad(itemName, 19)} ${totalPrice}`);
// }

// let total = 0;
// printRow("QTY", "ITEM", "TOTAL");
// for (const { quantity, itemName, unitPrice } of order) {
//   printRow(quantity, itemName, (unitPrice * quantity).toFixed(2));
//   total += unitPrice * quantity;
// }
// console.log();
// console.log(`Total: ${total}`);
