console.log("hello world")
// cmd ? highlighted : comment out
// console.log is a great tool to debug later down the line. For now we're going to use it as a learning tool

var a = 1
var A = 2

console.log(A)

var b = 1
var b = 2
console.log(b) //2

let c = 3
c = 4
console.log(c)

var firstName = 'Daniel'
const lastName = 'Thacker'
console.log(firstName, lastName)
console.log(firstName + " " + lastName)
firstName = 'Daniel'
lastName = 'Maynard'
console.log(firstNane, lastName)

/*
Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assingment operator (=)

Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
    It incorporates the variable name (x), the assingment operator (=), and the value (10) => x = 10
*/

var x
console.log('Declaration:', x)

var x = 10
console.log('Initialization 1:', x)

var y = "Hello"
console.log('Both:',x,y)

