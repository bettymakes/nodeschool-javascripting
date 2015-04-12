/* ========================================================================

NODESCHOOL
Javascripting::Functions

Instructions:
Create a file named functions.js.
In that file, define a function named eat that takes an argument named food
that is expected to be a string.
Inside the function return the food argument like this:
return food + ' tasted really good.';
Inside of the parentheses of console.log(), call the eat() function with the string bananas as the argument.

======================================================================== */

function eat(food) {
  // Added if statement to verify that food is a string
  if(typeof food !== 'string') {
    return false
  }

  return food + ' tasted really good.';
}

console.log(eat('bananas'));