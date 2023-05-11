let dinner = [
    {food: "chicken", price: 8.99},
    {food: "fries", price: 4.99}
];
TAX = 0.72
TIP = 0

let sub = 0
let total = 0

for(a=0;a<dinner.length;a++){
    sub += dinner[a].price
}
tax = sub * TAX
with_tax = sub + TAX
tip = with_tax * TIP;
total = with_tax9 + tip
console.log(`
    SUB: ${sub.toFixed(2)}
    TAX: ${tax.toFixed(2)}
    TIP: ${tip.toFixed(2)}
    ==========================
    TOTAL: ${total.toFixed(2)}
`)