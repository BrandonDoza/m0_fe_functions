// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
return `Hello, nice to meet you!`
}
console.log(greeting())


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hello ${name}, nice to meet you!`
}
console.log(customGreeting("William"))


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last){
    var name = first + middle + last
    return `Hello there ${name}, good to see you again!`
}
console.log(greetPerson("Robert", "James", "Smith"))



// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number){
    var product = number * number
    return `${product} is the square of ${number}`
}
console.log(square(9))
console.log(square(37))


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(quantity, item){
    if (quantity >=4)
    return `${item} is stocked`;
    if (quantity === 0)
    return `${item} OUT of stock`;
    if (quantity <= 3)
    return `${item} running LOW`;
} 
console.log(checkStock(4, "Coffee"))
console.log(checkStock(3, "Tortillas"))
console.log(checkStock(0, "Cheese"))
console.log(checkStock(1, "Salsa"))

/* checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW" */