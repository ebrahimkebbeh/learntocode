let select_park = document.getElementById('select_park')
        
for(i = 0; i < parkTypesArray.length; i++){
    let o = parkTypesArray[i];
    const option = document.createElement('option')
    option.innerHTML = o;
    option.value = o;
    select_park.appendChild(option)
}

let select_location = document.getElementById('select_location')

for(i = 0; i < locationsArray.length; i++){
    let o = locationsArray[i];
    const option = document.createElement('option')
    option.innerHTML = o;
    option.value = o;
    select_location.appendChild(option)
}

//location names start

function display(park){
    results.innerHTML += `
    
    <tr>
    <td>${park.LocationName}</td>
    <td>${park.Address}</td>
    <td>${park.State}</td>
    <td>${park.City}</td>
    <td>${park.Visit}</td>
    </tr>
    
    `
}
function list(){
    let text = select_park.selectedOptions[0].value
    let location = select_location.selectedOptions[0].value
    let parks = nationalParksArray
    if(location != 'any'){
        parks = parks.filter(p => p.State==location)
    }
    if(text != 'any'){
        parks = parks.filter(p => p.LocationName.includes(text))
    }
    results.innerHTML = ""
    parks.forEach(display)
}
// list()
select_park.addEventListener('change', list)
select_location.addEventListener('change', list)

//end of locaation name






// parkTypeArray.forEach(text => {
//     console.log(text)
//     let o = document.creayeElemnt('option')
//     o.innerHTML = text
//     o.value = text
//     select_park.appendChild(o)
// })

// for(let i = 0; i < parkTypesArray; i++){
//     let park = mountainsArray[i];
//     let o = document.createElement('option')
//     o.text = park.parkTypesArray
//     o.value = park.parkTypesArray
//     select_park.appendChild(o)
// }

//         let park = parkTypesArray

// park.forEach(function(item){
//     let o=document.createElement('option');
//     o.text = item.parkTypesArray
//     o.value = item.parkTypesArray
//     select_park.appendChild(o)
// });