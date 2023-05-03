function getMonth(d){
    const moths = [
        "juanuary"
        
    ];
    const index =  d.getMonth();
return months[index];
}


let d = new Date()
console.log(getMonthName(d))