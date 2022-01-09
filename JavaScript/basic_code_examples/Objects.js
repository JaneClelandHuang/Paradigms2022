// Examples 1-3 are all taken/adapted from:
// https://tylermcginnis.com/beginners-guide-to-javascript-prototype/

// Example 1
// Create an object with no properties
// Add some properties to it
// Add some functions to it
// Simple game in which the animal expends energy
// as it performs activities.

let animal = {}
animal.name = 'Leo'
animal.energy = 10

animal.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

animal.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

animal.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

animal.play(2);
console.log(animal.energy);


// Example #2
// Functional Instantiation
// We create a function to create the object
// and return the object as a return value
function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }

  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }

  animal.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }

  return animal
}

const paxton = Animal('Paxton', 5)
const lucy = Animal('Lucy', 30)

paxton.sleep(2)
paxton.eat(3)
lucy.play(5)
lucy.eat(1)
lucy.sleep(2)
lucy.play(3)
console.log(paxton);
console.log(lucy)

// Example 3:
// Functional instantiation with shared methods
// We create a function to create the methods
// and call it from the Animal constructor function

const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

function Animal2 (name, energy) {
  let animal = {}  
  animal.name = name
  animal.energy = energy
  animal.eat = animalMethods.eat
  animal.sleep = animalMethods.sleep
  animal.play = animalMethods.play

  return animal
}

console.log("\n Output Example 3:")
const paxton2 = Animal2('Paxton', 5)
const lucy2 = Animal2('Lucy', 30)
console.log(paxton2);
console.log(lucy2)

// Example 4:
// Object.create: creates an object that delegates responsibility
// back to the original object if a function call fails.
// We will call this parent and child (because it works in a way that
// is similar to class inheritance in a more traditional OO environment).
console.log("Example 4");
const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish

console.log(child.address)

// Example 5:
// Combining functional instantion, shared methods, and Object.create
// Note that this example reuses const animalMethods (already defined)
// Commenting it out because it already appears above
//const animalMethods = {
//  eat(amount) {
//    console.log(`${this.name} is eating.`)
//    this.energy += amount
//  },
//  sleep(length) {
//    console.log(`${this.name} is sleeping.`)
//    this.energy += length
//  },
//  play(length) {
//    console.log(`${this.name} is playing.`)
//    this.energy -= length
//  }
//}

function Animal2 (name, energy) {
  let animal = Object.create(animalMethods)
  animal.name = name
  animal.energy = energy

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)


// Example 6:
// Using Javascript's inbuilt prototype feature 
function Animal3 (name, energy) {
  let animal = Object.create(Animal3.prototype)
  animal.name = name
  animal.energy = energy
  return animal
}

Animal3.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
}

Animal3.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
}

Animal3.prototype.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
}

const flopsy = Animal3('Flopsy', 7);
const mopsy = Animal3('Mopsy', 10);
const cottontail = Animal3('Cottontail',9);

console.log("\nExample 6");
flopsy.eat(10)
mopsy.play(5)
cottontail.sleep(2)

// Example 7
// FINALLY if we just use the 'new' keyword, this is all 
// done for us!!
function Animal4 (name, energy) {
  this.name = name
  this.energy = energy
}

Animal4.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Animal4.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal4.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

const leo4 = new Animal4('Leo', 7)
const snoop4 = new Animal4('Snoop', 10)

// Example 8
// Official java specs added the notion of a class
// However, you will read all over the web that in Javascript
// a class is just "syntactical sugar"
class Animal5 {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

const leo5 = new Animal5('Leo', 7)
const snoop5 = new Animal5('Snoop', 10)

// Example 9
// Playing with arrays:
// Array find function expects to get a call-back function passed to it
const fruits2 = new Array();
console.log(Array.prototype);

let fruits = ["Apple", "Orange", "Plum", "Banana","Guava","Pineapple"];
console.log("\nPrint array elements");
for(i in fruits)
	console.log(fruits[i]);

// Pop last item
console.log(`\nRemoving (pop) last item: ${fruits.pop()}`);

// Reverse the array
fruits.reverse();
console.log("\nReversed order:");
for(i in fruits)
	console.log(fruits[i]);

// Example 10
function Circle(centerX=0, centerY=0, radius=1, color='black') { 
	this.x = centerX; 
	this.y = centerY; 
	this.radius = radius; 
	this.color = color; 
} 

Circle.prototype.area = function () { 
	return Math.PI * this.radius * this.radius; 
}; 

Circle.prototype.circumference = function () { 
	return 2 * Math.PI * this.radius; 
}; 

const assert = require('assert'); 
const c = new Circle(1, 5); 
assert.deepEqual(c, {x:1, y:5, radius:1, color:'black'}) 
assert(c.area() === Math.PI); 
assert(c.circumference() === 2 * Math.PI); 
assert(Object.getPrototypeOf(c) === Circle.prototype); 
assert(c.constructor) === Circle; 
assert(typeof(c) === 'object');

// Example 10
var assert = require('assert');

// Constructor function
// Note the default parameter values that are used if nodeName
// parameters are provided
function Circle(centerX=0, centerY=0, radius=1, color='black') { 
	this.x = centerX; 
	this.y = centerY; 
	this.radius = radius; 
	this.color = color; 
} 

// The area and circumference methods are stored
// as properties in the prototype
Circle.prototype.area = function () { 
	return Math.PI * this.radius * this.radius; 
}; 

Circle.prototype.circumference = function () { 
	return 2 * Math.PI * this.radius; 
}; 

// Create a new object with prototype Circle.prototype
// and binds the now initialized object to the variable c
const c = new Circle(1, 5); 

// Some interesting asserts
// Do these make good tests or not?
assert.deepEqual(c, {x:1, y:5, radius:1, color:'black'}) 
assert(c.area() === Math.PI); 
assert(c.circumference() === 2 * Math.PI); 
assert(Object.getPrototypeOf(c) === Circle.prototype); 
assert(c.constructor) === Circle; 
assert(typeof(c) === 'object');


