fetch('https://reqres.in/api/users/23')
.then(res => {
    if (res.ok){
        console.log('suceesful')
    }else{
        console.log('not succesful')
    }
    
})
.then(data => console.log(data))
fetch(error => console.log('error'))