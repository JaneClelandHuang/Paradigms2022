var assert = require('assert');

// returns an array of divisors
function getDivisorSet(number) {
	let currentNum = Math.trunc(number/2);  
	let list = [];
	for (i = currentNum; i >0; i--) {
		if (number%i === 0){
			list.push(i);
		}
	}
	return list;
} 

// Computes the total sum of a single set of divisors
function sumNumberList(numbers) {
	let total = 0;
	for (i=0;i<numbers.length;i++) {
		total += numbers[i];
	}
	return total;
}

// Compute and display social pairs
// This is not an optimal way.  It is better to compute them once and store
// results.  Then do the pairwise check against a map/array of results.
// I am sharing the 'simple' way.  Only computes upper triangulation of the 
// pairwise comparisons to save time.
function computeSocialPairs(maxNumber){
	for(let i=1;i<maxNumber;i++){
		for(let j=i+1;j<maxNumber;j++){
			if(sumNumberList(getDivisorSet(i)) ===j){ 
				if(sumNumberList(getDivisorSet(j)) === i){
					console.log(`${i} ${j}`)
				}
			}
		}
	}
}


// Used to speed up the process
// Save an array of all divisor sums 
function generateAllDivisorSums(maxNumber){
	const allDivisorSums = [];
	for(let i=1;i<maxNumber;i++){
		allDivisorSums[i]= sumNumberList(getDivisorSet(i));
	}
	return allDivisorSums;
}

// Find social pairs using the saved scores
function findSocialPairs(maxNumber,allDivisorSums){
	for(let i=1;i<maxNumber;i++){
		for(let j=i+1;j<maxNumber;j++){
			if(allDivisorSums[i] ===j){ 
				if(allDivisorSums[j] === i){
					console.log(`${i} ${j}`)
				}
			}
		}
	}
}

// Helper function
function isSocialPair(number1, number2) {
	if ((sumNumberList(getDivisorSet(number1)) ===number2) && (sumNumberList(getDivisorSet(number2)) ===number1))
		return true;
	else
		return false;
}


//**************************************************************
// Calling code approach 1 (quite slow)
//**************************************************************
console.log("FIRST APPROACH");
computeSocialPairs(300); // keeping the number low because it is slow

//**************************************************************
// Calling code approach 2(a little faster)
//**************************************************************
console.log("\n\nSECOND APPROACH");
let maxNumber = 10000;
let listOfDivisorSums = generateAllDivisorSums(maxNumber);
findSocialPairs(maxNumber,listOfDivisorSums);

// Test cases! 
assert(isSocialPair(220,284));
assert(isSocialPair(2620,2924));
assert(!isSocialPair(284,230));  // Note the ! NOT.





	

