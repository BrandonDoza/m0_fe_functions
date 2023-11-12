// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
/* The method is changing all the letters in the string to 
lower case.  */

"Hello World".includes("Hello");
/* The method is checking to see is the string contains the word
hello, and returning the boolean true. */

"Hello World".endsWith("Hello");
/* The method is checking to see if the string ends with the word 
hello and returning a boolean false.  */

"Hello World".endsWith("rld");
/* The method is checking to see if the string ends with the letters 
rld and returning a boolean true  */


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var dogsName = "Kevin"
var streetName = "Maple Hill"
console.log(dogsName.toUpperCase())
console.log(streetName.endsWith("Hill"))





// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var numbers = [3, 2, 1]
var names = ["Michelle", "Brad", "Ellie:"]
/* This method call sorted the numbers in the array into numerical order */
console.log(numbers.sort())
/* This method call reversed the order of the names in the array */
console.log(names.reverse())

