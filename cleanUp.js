/* // Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// // EX 1:

/* I changed the code to include a value for the askForName function 
and changed the return to a persons specific name and then 
had the output greet them by their name. I did this to shorten up the 
code and to find a persons exact name.  */
function askForName(name){
  return `Hello ${name}`
}
console.log(askForName("David"))
console.log(askForName("Karen"))

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
/* I added console.log to the output, because the original code 
would not show the outcome of the function.  */


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();
/* I changed the func to function so the code would work properly  */

//  EX 4:

  function average(num1, num2) 
  {
var avg = num1 /2 + num2 / 2;

return avg
  }
console.log(average(15, 9));
  /* I took out the sum variable and put the equation into one variable. I did this to shorten 
  up the code and make it a little easier to read. */

  
  