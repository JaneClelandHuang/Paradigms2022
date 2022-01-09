// Example 1
// Changing a simple parameter doesn't impact the
// original argument.  (see a = 300).
// Changing a property of a referenced object, does 
// change the actual value (see b[1]=400.

const assert = require('assert');

const x = [1,2,3];
const y = [4,5,6];

function f(a,b){
	a = 300;
	console.log(x);
	assert.deepStrictEqual(x, [1,2,3]);
	b[1] = 400;
	console.log(y);
	assert.deepStrictEqual(y, [4,400,6]);
}

f(x,y);

// Example 2
// Point of interest 
// Global variables are stored as properties in the
// global object
const p = {x: 3, y: 5}

assert(p.z === undefined);
assert.throws(()=>z, ReferenceError);

// Example 3
// What happens to free variables?
const x2 = 'OUTER';  // Free variable
function second() {
	console.log(x2);
}
function first() {
	const x2 = 'FIRST';  
	second();
}
first();  // What is the output?

// Example 4
// What happens to free variables?
const x3 = 'OUTER';  // Free variable
function second2(x3) {
	console.log(x3);
}
function first2() {
	const x3 = 'FIRST';  
	second2(x3);
}
first2();  // What is the output?

// Example 5
// Function nested inside other function
function second3(f) {
	const name = 'new';
	f();
}

function first3() {
	const name = 'old';
	const printName = () => console.log(name);
	second3(printName);
}

first3();

// Example 5
// Function nested inside other function
function second4(f) {
	const name = 'new';
	f();
}

function first4() {
	const name = 'old';
	//const printName = () => console.log(name);
	second4(() => console.log(name));
}

first3();

// Example 6
// A generator function
const nextSquare = (() => {
	let previous = -1;
	return () => {
		previous++;
		return previous*previous;
	}
})();

console.log("\n Testing the generator function");
console.log(nextSquare());
console.log(nextSquare());

// Example 7
// A generator function
const nextCircle = () => {
	let radius = 1;
	return () => {
		let area = Math.PI *(radius*radius);
		radius = radius+radius;
		return area;
	}
}();

console.log("\n Testing the circle generator function");
console.log(nextCircle());
console.log(nextCircle());
console.log(nextCircle());
