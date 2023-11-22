//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function personFavDishes(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}:`);
            person[key].forEach(item => {
                if (typeof item === 'string') {
                    console.log(`- ${item}`);
                }
                else if (typeof item === 'object') {
                    for (let dish in item) {
                        console.log(`- ${item[dish]}`);
                    }
                }
            });
        } else if (typeof person[key] === 'string') {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

personFavDishes(person3)


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/



// Create our Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
// Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
// Create another arrow function for the addAge method that takes a single parameter
    addAge = (years) => {
        this.age += years;
    }
}

let person1 = new Person('Aakash', 45);
let person2 = new Person('Gary', 30);

person1.printInfo();
person2.printInfo();

// Adding to the age 
person1.addAge(3);
person1.printInfo();

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Nope! you are looking at the wrong URL', error);
    });

async function fetchData() {
    try {
        const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Nope! you are looking at the wrong URL', error);
    }
}

fetchData();

/*
Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.
Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

const input = "The greatest victory is that which requires no battle";

function reverseWords(str) {
    let words = [];
    let currentWord = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            currentWord += str[i];
        } else {
            words.unshift(currentWord);
            currentWord = '';
        }
    }
    words.unshift(currentWord);
    return words.join(' ');
}

const output = reverseWords(input);
console.log(output);


/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str) {

    const words = str.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(`${words[i]} ${words[i].length}`);
    }

    return result;
}
const input1 = "apple ban";
const output1 = addLength(input1);
console.log(output1);