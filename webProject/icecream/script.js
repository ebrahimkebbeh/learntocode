function iceCreamPrice(scoopcount, icecup,sprinkles, whippedcream, hotfudge, cherry){
    rate = 0.08
    let price = 1 + (1.25 * scoopcount)
    if(icecup){
        price += sprinkles ? 0.50 : 0;
        price += whippedcream ? 0.25 : 0;
        price += hotfudge ? 1.25 : 0;
        price += cherry ? 0.25 : 0;
    }
    const tax = price * rate;
    const total = price + tax;
    return {
        price: price,
        tax: tax,
        total: total
    }
}
function dollar(amount){
    return`$${amount.toFixed(2)}`;
}

console.log(iceCreamPrice(2,true,true,true,true,true))
console.log(iceCreamPrice(2,false,false,false,false,false))