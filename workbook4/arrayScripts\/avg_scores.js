function getAverage(list){
    total = 0
    for(a=0;a<list.length;a++){
        total += list[a]
    }
    return total / list.length
}


let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScorse = [82, 98, 94, 88, 92, 100, 100];

mine = getAverage(myScores)
yours = getAverage(yourScorse)

console.log("MINE:", mine)
console.log("YOUR:", yours)

console.log("did i win", mine > yours)