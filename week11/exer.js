class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  promote(newJobTitle, newPayRate){
    this.jobTitle = newJobTitle
    this.payRate = newPayRate 
  }
  getIntro(){
    return `hello, my name is ${this.firstName}. i work as a ${this.jobTitle} and mypay rate is ${this.payRate} per hour.`
  }

}

let Employee1 = new Employee (
    1, 'ian', 'auston', 'graphic artist', 42.50);
    console.log(`Employee ${Employee1.firstName} created`)

    let intro = Employee1.getIntro();
    console.log(intro)

    Employee1.promote("sr. graphic artist", 46.75)

    console.log(`Job title is ${Employee1. jobTitle}`)
    console.log(`pay rate is $${Employee1.payRate}`)