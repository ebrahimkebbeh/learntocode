 //passing parameters to function
 function displayMailingLabel(name, address, city, state, zip){
    let message = name + address + city + state + zip;
     console.log(name)
     console.log(address)
      console.log(city + "," + state + "," + zip)
 }
let somename = "ebrahima"
let someaddy = "1350 webster ave"
let  somecity = "Bronx"
let somestate = "NY"
let somezip = 10456
displayMailingLabel(somename, someaddy, somecity, somestate, somezip);



 function addNumbers( num1, num2 ){
    // let number = num1 + num2
    //  console.log(`{ num1 } + { num2 }`)
    console.log(num1)
    console.log(num2)
 }
let somenumber = 1
let somenumber2 = 5
  addNumbers(somenumber + somenumber2)
