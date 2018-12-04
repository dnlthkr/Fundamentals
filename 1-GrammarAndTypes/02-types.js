// Booleans
// What is a boolean?
var on = true;
console.log(on); // true
let off = false;
console.log(off); // false

//boolean can represent: true/false, yes/no, on/off

// Null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); // Null

/* We've talked before how every variable is basically a storage container in Javascript 
think of variables with null and undefined as packages coming out of UPS.
null packages are packages that were intentionally packed up with nothing, but have been assembled
undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
*/

// Numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999; // 15 '9s
console.log(precise); // 999999999999999

var rounded = (9999999999999999); // one more 9
console.log(rounded); // 10000000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo); // double quotes single quotes

// Numbers vs. Strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first+second);
console.log(second);
console.log(typeof first);
console.log(typeof second);

/*
What's going on here?
Addition vs. Concatenation

When JS sees combing two or more numbers, it adds the values together using the built-in
math functionalitiy; when it sees adding together one or more strings, it changes and the plus
sign becomes an assingment operator--it smashes the values together without trying to
synthesize the values */
 
let third = 1050 + '100';

console.log(third); // 1050100
console.log(typeof third); // string





let firstName = 'Daniel'
let lastName = 'Thacker'
console.log(firstName, lastName)

let houseNumber = '423'
let street = 'N Riley Ave'
console.log(houseNumber, street)

let city = 'Indianapolis,'
let state = 'Indiana'
let zipcode = '46201'
console.log(city, state, zipcode)


// Objects
/*
What is an object?

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): 'blue' (value)), separated with a colon
Each key separated with a coma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};
console.log(burritosNow);
console.log(typeof burritosNow); //object


/*
Arrays are great for lists

Denoted by []
Has values ('blue', 'green', 'yellow'), seperated with commas
/*

var burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]

console.log(typeof burritos); // OBJECT 
*/


