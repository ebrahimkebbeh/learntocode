const nameField = document.getElementById("nameField");
const ageField = document.getElementById("ageField");
const button = document.getElementById("showBtn")
function showmessage(){


let name = nameField.value;
let age = ageField.value;

let message =`Hi ${name}! i hear you are ${age} year old!`;
const messgaepara = document.getElementById('messagepara')
messgaepara.innerHtml = message 
}
button.onclick = showmessage