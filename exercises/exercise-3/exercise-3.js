let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


for(const {quantity: quan, itemName: item, unitPrice: price} of order){
      console.log(`${quan} ${item} ${quan * price}`);
}


let sum = 0;
for (const {quantity: quan, unitPrice: price} of order) {
    
  let value = `${quan * price}`;
    sum += value;
   
}
 
console.log("Total: " + sum);