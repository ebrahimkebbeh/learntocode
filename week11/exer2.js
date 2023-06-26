class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
}
    getFullName() {
      return firstName + " " + lastName;
}
    getIntro() {
      return "My name is " + this.getFullName() + "!";
} }
let cool = Person.getIntro();
console.log(cool)