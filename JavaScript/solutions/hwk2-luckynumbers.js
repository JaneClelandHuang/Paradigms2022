
// Populate the array first
let maxNumber = 5;
let numbers = Array.from({length: maxNumber}, (v, k) => k+1);

// I created a helper function to check whether at least one lucky number exists for 
// a given hypotenuse
function hasLuckyNumber(number){
	for (let i = number-1;i>0;i--) {
		for (let j = i-1; j>0; j--){
			if ((j*j)+(i*i)===number*number)
				return true;
		}
	}
}

// As some hypotenuse have more than one associated triangle 
// it is easiest to just directly sum the hypotenuse.
function getHypotenuseSum(number){
	hypotenuseSum = 0;
	for (let i = number-1;i>0;i--) {
		for (let j = i-1; j>0; j--){
			if ((j*j)+(i*i)===number*number)
				hypotenuseSum+=number;
		}
	}
	return hypotenuseSum;
}	

const reducer = (accumulator,currentValue) => accumulator + currentValue;

// Here is the declarative statement.
// It uses filter to remove any hypotenuse values that don't produce at least one right triangle.
// it uses map to sum the hypotenuse' of all lucky number sets for that hypotenuse
// It uses reduce to aggregate these values.
console.log(numbers.filter(number=>hasLuckyNumber(number)).map(number=>getHypotenuseSum(number)).reduce(reducer));


	