//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
//Your code goes here
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findDogNames(string, names) {
  for (let i = 0; i < names.length; i++) {
    let found = false;
    for (let j = 0; j < string.length; j++) {
      if (string.slice(j, j + names[i].length).toLowerCase() === names[i].toLowerCase()) {
        console.log(`Matched ${names[i]}`);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("No Match");
    }
  }
}

//Call method here with parameters
console.log(findDogNames(dog_string, dog_names));


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
function replaceEvens(arr){
  //code goes here
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr.splice(i, 1, "even index");
    }
  }
  return arr;
}

let modifiedArray = replaceEvens(arr);
console.log(modifiedArray);


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


/*
Codewar Problem 1
Sort deck of cards
Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.
All cards in the list are represented as strings, so that sorted list of cards looks like this:

['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

Solution below
*/
function sortCards(cards) {
  const cardOrder = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

  cards.sort((card1, card2) => {
    return cardOrder.indexOf(card1) - cardOrder.indexOf(card2);
  });

  return cards;
}

const shuffledCards = ['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'];
const sortedCards = sortCards(shuffledCards);
console.log(sortedCards);

/*
Codewar Problem 2
Is n divisible by (...)?
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:
(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7

Solution below
*/
function isDivisible(n, ...args) {
  if (args.length === 0) {
    return true; // If no other arguments are provided, return true
  }

  for (let i = 0; i < args.length; i++) {
    if (n % args[i] !== 0) {
      return false; // If n is not divisible by any argument, return false
    }
  }
  
  return true; // If n is divisible by all arguments, return true
}

console.log(isDivisible(6, 1, 3));
console.log(isDivisible(12,2));
console.log(isDivisible(100,5,4,10,25,20));
console.log(isDivisible(12,7));
