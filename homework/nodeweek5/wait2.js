const myInt = require("./wait.js");

/**
 * This doesn't work because myInt or wait.js's export is equal to a setTimeout therefore it is NOT a function so you would want to 
 * call it without the parenthesis. If you call it with the parenthesis it will throw an error "myInt is not a function"
 */
/* myInt(); */

myInt;