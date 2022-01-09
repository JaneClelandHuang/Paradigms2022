// This file just includes example from 
// Lecture 2.

// Example 1: Basic use of JavaScript within html
<!DOCTYPE HTML>
<html>
<body>
  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>
</body>
</html>


// Example 2:
// Basic variables
let user = 'John';
let age = 25;
let message = 'Hello';

let user = 'John',
  age = 25,
  message = 'Hello';
  
const myBirthday = '18.04.1982';

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// Example 3: Data Types
// no error even though we first assign a string and then a number!
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

//the “number” type cannot represent integer values larger than 2^53
// use BigInt instead.  Make sure you add an "n" at the end!
const bigInt = 1234567890123456789012345678901234567890n;

var message = 'Hello';


	
	
	