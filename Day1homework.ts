// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A:boolean

let d = {age: number};
// A: {age : any}

let e = [3]
// A: number []

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A:Property 'releaseYear' is missing in type

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Type 'string' is not assignable to type 'number'

function myFunc(a: number, b: number): number {}
// A:A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value

// javascript katas from code wars below

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//       return "Even";
//   } 
//   else {
//       return "Odd";
//   }
// }