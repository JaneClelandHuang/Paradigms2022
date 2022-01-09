// F1: Function Example #1: Callback
function calculate(operation, num1, num2){
	console.log(`Performing ${operation}`);
	let answer = operation(num1, num2);
	return answer;
}

// F2: Function Example #2 (Callback written as Arrow function)
let calculate2 = (operation, num1, num2)=> {
		return operation(num1, num2);
};

function add(num1num2){
	return num1 + num2;
}

function multiply(num1, num2){
	return num1 * num2;
}
console.log(`F1 answer is: ${calculate(multiply, 2, 3)}`);
console.log(`F2 answer is: ${calculate2(multiply, 2, 10)}`);

// Test cases:
var assert = require('assert'); 
assert.equal(calculate(multiply,2,3),6);





