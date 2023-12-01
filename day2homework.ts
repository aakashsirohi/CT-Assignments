// 1. Given the data below, define a type alias for representing users.
type User = {
    name: string;
    age: number;
    company?: string; // Optional property since it is not required for all users
};

let users: User[] = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];
console.log(users[0]);
console.log(users[1]);

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

const today: DayOfWeek = "Wednesday";
console.log(today);

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName: string) { }
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person('Aakash', 'Sirohi');
console.log(person.fullName);

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Person1 {
    constructor(
        public name: string,
        public age: number
    ) { }
    
    introduction() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

class Employee extends Person1 {
    constructor(
        name: string,
        age: number,
        public salary: number
    ) {
        super(name, age);
    }
    
    displaySalary() {
        console.log(`${this.name} earns $${this.salary} annually.`);
    }
}
const john = new Employee("Aakash Sirohi", 45, 50000);
john.introduction(); // Outputs: Hello, my name is John!
john.displaySalary(); 
// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface Employee {
    name: string;
    salary: number;
    address: Address;
}

let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};
console.log(`${employee.name} lives at ${employee.address.street} in ${employee.address.city} and earns ${employee.salary}`);