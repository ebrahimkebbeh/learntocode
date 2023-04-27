let hour = 17;

if(hour <= 10){
    console.log("GOOD MORNING!");
}else if( hour < 17){
    console.log("GOOD DAY!");
}else{ // could do this but not required: }else if(hour >= 17){}
    console.log("GOOD NIGHT!");
}

console.log(`BECAUSE ITS ${hour}:00!!!`);
