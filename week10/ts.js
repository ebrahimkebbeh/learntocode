
class User{
    constructor(usersName, email, password){
        this.usersName = usersName;
        this.email = email;
        this.password = password;
    }

    static counusers(){
        console.log('there are 50 users')
    }
   
    

    register(){
        console.log(this.usersName + ' is now registered')
    }
}

let bob = new User('bob', 'bob@mail.com', '12345')

 bob.register();

// User.counusers()

class Member extends User{
    constructor(usersname, email, password, memberpackage){
        super(usersname, email, password);
        this.package = memberpackage;
    }
    getPackage(){
        console.log(this.username+' is subscribe to the stansard package')
    }
}

let mike = new Member('mike', 'mike@gmail.com', '12345')

mike.getPackage()