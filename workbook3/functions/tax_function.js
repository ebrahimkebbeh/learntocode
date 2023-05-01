function getFederalTax(gross,code){
    let rate = 0.23;
if(code === 1){
    rete = 0.21
}else if(code === 2){
    rate = 0.185
}else if(code === 3){
    rate = 0.185
}else if(code === 4){
    rate = 0.18 - (.005 * (code - 4))
}
    console.log(rate);
    return rate * gross

}


console.log("person , gross pay 750, withholingcod: 0, tax:", getFederalTax(750, 0))
console.log("person , gross pay 750, withholingcod: 2, tax:", getFederalTax(1550, 2))
console.log("person , gross pay 750, withholingcod: 6, tax:", getFederalTax(1100, 6))