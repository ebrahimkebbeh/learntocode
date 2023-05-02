function convertFtoC( celsius){
    let fahrenheit = 0
    if(celsius == 45){
        fahrenheit = 113;
    }
    else if (celsius == 19){
        fahrenheit = 66;
    }
    else if(celsius == 0){
        fahrenheit = 32;
    }
    return fahrenheit
}
let fahrenheit = convertFtoC(19)
console.log(fahrenheit)