// camelCase, const vars, input (more next series), comments, math

// Common naming cases
let thisIsCamelCase = 'hi';
let this_is_snake_case = 'hi';
// Constant variables cannot be reassigned
const THIS_IS_SCREAMING_SNAKE_CASE = 'hi';

// vvv THIS CAUSES AN ERROR
THIS_IS_SCREAMING_SNAKE_CASE = 'bye';
// ^^^ THIS CAUSES AN ERROR

// Get input from the user
let userInput = prompt('Give input');

// All of these '//' lines are comments and are only for describing the code

let number = 4.88;
let rounded = Math.round(number);
let floored = Math.floor(number);
// More docs at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
