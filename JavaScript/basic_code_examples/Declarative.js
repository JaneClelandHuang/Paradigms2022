const zooAnimals = ["cat", "dog", "donkey", "lion", "tiger", "giraffe", "elephant", "tiger", "hedgehog", "tortoise", "cow", "crocodile"];
const animals = ["cat","hedgehog","cow"];
const animals2 = ["elephant","frog"];

// Example of imperative code
const arrayContainsAnotherArray = (needle,haystack) => {
	for (let i=0; i<needle.length; i++){
		if(haystack.indexOf(needle[i])=== -1)
			return false;
	}
	return true;
}

// Example of declarative code
const arrayContainsAnotherArray2 = (needle=[], haystack=[]) =>
	needle.every(el => haystack.includes(el));
	
function test(){
	var assert = require('assert'); 
	assert(arrayContainsAnotherArray(animals,zooAnimals));
	assert(!arrayContainsAnotherArray(animals2,zooAnimals));  // Testing that this returns false
	assert(arrayContainsAnotherArray2(animals,zooAnimals));
	assert(!arrayContainsAnotherArray2(animals2,zooAnimals));
}
	

console.log(arrayContainsAnotherArray(animals,zooAnimals));
console.log(arrayContainsAnotherArray(animals2,zooAnimals));
console.log(arrayContainsAnotherArray2(animals,zooAnimals));
console.log(arrayContainsAnotherArray2(animals2,zooAnimals));

test();
