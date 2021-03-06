/* ========================================================================

NODESCHOOL
Javascripting::Function Arguments

Instructions:
Create a file named function-arguments.js.
In that file, define a function named math that takes three arguments. It's important for you to understand that arguments names are only used to reference them.
Name each argument as you like.
The function math should multiply the second and third arguments, then add the first argument to the outcome of the multiplication and return the value obtained.
After that, inside the parentheses of console.log(), call the math() function with the number 53 as first argument, the number 61 as second and the number 67 as third argument.

======================================================================== */

function math(num1, num2, num3) {
  var result = num2 * num3 + num1;
  return result;
}

console.log(math(53, 61, 67));