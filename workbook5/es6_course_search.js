let courses = [
{
CourseId: "PROG100",
Title: "Introduction to HTML/CSS/Git",
Location: "Classroom 7",
StartDate: "09/08/22",
Fee: "100.00",
},
{
CourseId: "PROG200",
Title: "Introduction to JavaScript",
Location: "Classroom 9",
StartDate: "11/22/22",
Fee: "350.00",
},
{
CourseId: "PROG300",
Title: "Introduction to Java",
Location: "Classroom 1",
StartDate: "01/09/23",
Fee: "50.00",
},
{
CourseId: "PROG400",
Title: "Introduction to SQL and Databases",
Location: "Classroom 7",
StartDate: "03/16/23",
Fee: "50.00",
},
{



CourseId: "PROJ500",
Title: "Introduction to Angular",
Location: "Classroom 1",
StartDate: "04/25/23",
Fee: "50.00",
}
];

LIMIT = 50 
function Cheap(item){
    return Number(item.fee) <= LIMIT
}

cheapitem = courses.filter(Cheap)
console.log(cheapitem.length)
//all in one line
console.log(courses.filter( item => Number(item.Fee) <= LIMIT ).length)

let kids = [ { first : "Natalie", last : "Plyers" }, { first: "Brittany", last: "Ray" }, { first: "Zachary", last: "Westly" } ];

function buildFullName(arrayElement) { 
    return arrayElement.first + " " + arrayElement.last;
}
let names = kids.map(buildFullName)

names.forEach(item => console.log(item) )

// Array.map - returns a array/list of function results
// Array.forEach - applies function to every item in the list/array, but returns nothing.

list = [9, 2, 7, 3, 5]
list.forEach( item => console.log(item) )


