function copyright(){
    console.log("COPYRIGHT 2024");
}
copyright();
function greeting(username="World", age=0){
    return `Hello ${username}!!! You are ${age} years old.`;
}
function printGreeting(username="world", age=0){
    let result = greeting(username, age);
    console.log(result);
}

let testResult = greeting("Class", 21);
console.log(testResult === "Hello Class!!! You are 21 years old.")

printGreeting("Class", 21);
printGreeting("Kevin", 55);
printGreeting();
function addTwo(a, b){
    let result = a + b;
    return result;
}
console.log(addTwo(6, 7));
console.log(addTwo("6", "7")); //ONE OR MORE STRINGS CONCATENATE
console.log(addTwo(6, "7"));
console.log(addTwo("6", 7));
copyright();

// Order of operations affects outcome using + and strings
console.log( 6 + "ABC" + (7 + 10)); // outputs 6ABC17
console.log( 6 + "ABC" + 7 + 10); // outputs 6ABC710
console.log( 6 + 7 + "ABC"); // outputs 13ABC
console.log( 6 + (7 + "ABC")); // outputs 67ABC
console.log( `${6+7} ABC`); // outputs "13 ABC" - MODERN is to user JS Template Strings