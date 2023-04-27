a = 123
var b = 123;
let c = 123;
const d = 123;

//naming - cant start with a number
TAX_RATE = 1.40 //ALL CAPS INDICATES TRUE CONSTANT
PI = 3.14159

//Data Types

amount = 123.99;  //  Number data type
text = "Hello World!";  //  String data type

x = 6
y = 7

console.log( x * y ); //print out 42

// mathematical operators:
// + Add
// - Subtract
// * Multiple
// / Divide

// CONDITIONALS/branching, flow-control example if then else and else if. See also switch.

let hour = 10; // 0-23 
if(hour <= 10){ // logical boolean(true/false) data type expression.
	console.log("GOOD MORNING");
}else if(hour < 17){
	console.log("GOOD AFTERNOON");
}else{ //NO NEED TO CHECK AS IF ITS NOT MORNING AND NOT AFTERNOON IT MUST BE EVENING
	console.log("GOOD EVENING");
}

// CODE REUSE/ORGANIZATION
function addTwo(a, b){
	return a + b;
}
console.log(addTwo(6, 7)) // prints out 13
console.log(addTwo(4, 5)) // prints out  9

function greet(username){
	console.log("Hello, " + username + "!!!"); 
	//old way - CONCATENATION (Chaining like train cars);
	
	console.log(`Hello, ${username}!!!`); 
	//new way - JS String Template using backtick, and escaping with ${}
}
greet("Class"); //prints out "Hello, Class!!!"
greet("Kevin"); //prints out "Hello, Kevin!!!"



function hourGreeting(hour){ // 0-23 
	if(hour <= 10){ // logical boolean(true/false) data type expression.
		console.log("GOOD MORNING");
	}else if(hour < 17){
		console.log("GOOD AFTERNOON");
	}else{ //NO NEED TO CHECK AS IF ITS NOT MORNING AND NOT AFTERNOON IT MUST BE EVENING
		console.log("GOOD EVENING");
	}
}

hourGreeting(10); //MORNING
hourGreeting(13); //AFTERNOON
hourGreeting(18); //EVENING

// COMPLEX DATA TYPES - COLLECTIONS - Multiple values
students = ["Larry", "Moe", "Curly"] // An Array (AKA Ordered List) of Strings
address = { //Create an Object (Like a block of data or a Dictionary);
	line1 : "1750 6th st", // first key : value pair
	city: "Columbia City",
	state: "OR",
	zip: "97018" //NO COMMA ON THE LAST pair
}

console.log(students[0]) //print "Larry" [] are subscripts 0 is the offset (how far from the first)

console.log(address.zip) // prints out "97018"
console.log( address.line1 + "\n" + address.city + "\n" + address.state + " " + address.zip)
//How could we use template strings instead?
//