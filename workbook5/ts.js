// let kids = ['jhon', 'mike', 'ali']

// let numkids = kids.length;
// for(a=0;a<numkids;a++){
//     console.log(kids[a])
// }

// function compareAscendingNumber(a, b) {
//     if (a < b) return -1; // right order
//     else if (a == b) return 0; // same values
//     else return 1; // swap, wrong order
//     }
//     let numbers = [3, 27, 400, 1, 111, 5];
//     numbers.sort(compareAscendingNumber);
//     console.log(numbers)



// let numbers = [3, 27, 400, 1, 111, 5];

// numbers.sort(function(a,b){
//     if (a < b) return -1;
//     else if (a == b) return 0;
//     else return 1;
// });
// console.log(numbers)


// 

let products = [
    {prodId: 2, item: "Notepads (12 pk)", price: 12.29},
    {prodId: 12, item: "Black Pens (12 pk)", price: 5.70},
    {prodId: 22, item: "Stapler", price: 12.79}
    ];

    products.sort(function(a,b){
        if (a.item > b.item) retrun -1;
        else if (a.item == b.item) return  0;
        else return 1,

        
    })