var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
myRequest.onload = function(){
    var myData = JSON.parse(myRequest.responseText);
    console.log(myData[0]);
};
myRequest.send();
})


