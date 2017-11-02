// tsc greeter.ts - to run this

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

let student = new Student('Jane', 'M', 'Jones');
let person = {firstName: 'Terence', lastName: 'Winkler'};

console.log(greeter(student));
console.log(greeter(person));
