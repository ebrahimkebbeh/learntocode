function getRateData(days, tag, gps, roadside, under25){
    //output variables
    let rentalAmount = 0;
    let optionsAmount = 0;
    let surchargeAmount = 0;
    let totalDue = 0;
    //logic
    rentalAmount = 29.99 * days;
    if(tag){
        optionsAmount = 3.95 * days;
    }
    if(gps){
        optionsAmount = 2.95 * days;
    }
    if(roadside){
        optionsAmount = 2.95 * days;
    }
    if(under25){
        surchargeAmount = rentalAmount * 0.30;
    }

    totalDue = rentalAmount + optionsAmount +surchargeAmount

    // return object with outputvariable as properties
    return {
        rentalAmount: rentalAmount,
        optionsAmount: optionsAmount,
        surchargeAmount: surchargeAmount,
        totalDue: totalDue
    }
}

//test
const results = getRateData( 7, true, true, true, false)

function displayResult(results){
console.log(`
    car Rental:         $${results.rentalAmount.toFixed(2)}
    options:            $${results.optionsAmount.toFixed(2)}
    under 25 surcharge: $${results.surchargeAmount.toFixed(2)}

    car Rental:         $${results.totalDue.toFixed(2)}
`);
}
displayResult(getRateData(10, true, true, true, true))
displayResult(getRateData(10, false, false, false, false))
