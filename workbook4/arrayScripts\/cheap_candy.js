let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
];

function costcandy(candy){
    console.log(candy.proudct, candy.price)
}

function candydeal(deal){
    for(a=0;a<products.length;a++){
    candy = products[a]
    if(candy.price <= deal){
        costcandy(candy)
    }
  }
}

function candysearch(text){
    for(a=0;a<products.length;a++){
    candy = products[a]
    if(candy.product.indexOF(text) > -1){
        costcandy(candy);
    }
  }
}
function gotcandy(text){
    for(let a=0;a<products.length;a++){
        candy = proudcts[a];
        if(candy.product.indexOF(text) > -1){
            return true
        }
    }
}
console.log(`Which candies costs less than $4.00?`);
    candydeal(4)

    console.log(`Which candies has "M&M" its name?`);
    candysearch("M&M")

    console.log(`Do we carry "Swedish Fish"?`);
    console.log(gotcandy("Swedish Fish") ? "YES" : "NO");