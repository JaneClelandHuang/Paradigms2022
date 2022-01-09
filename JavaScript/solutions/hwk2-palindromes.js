// Part 1.a
// Check if a string contains any two words that are palindromes of each other.

// Standard approach for reversing a string
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}

// Checks if a string has a palindrome in the GLOBALLY defined array
function hasPalindrome(string){
	if((testString.indexOf(reverseString(string))) > -1){
	    return true;
	} else
		return false;
}

function convertStringToArray(string){
	let arr = string.split(" ");
	console.log(arr);
	return arr;
}

// Some tests
const testString1 = ["apple","epple","green","neerg"]; // should find 2
const testString2 = ["no","afos","cat","sat","on","the","sofa"]; // should find 2
const testString3 = ["the","crazy","cat","sat","on","the","sofa"]; // should find 0
const string1 = "on a cold winter's night, when the moon shone brightly through the clouds; and no stars were visible in the sky."  // answer = 3 as a is a palindrome of itself!!
testString = convertStringToArray(string1);
console.log(testString.filter(word=>hasPalindrome(word)).length," anagrams found");
testString = testString2;
console.log(testString.filter(word=>hasPalindrome(word)).length," anagrams found");
testString = testString3;
console.log(testString.filter(word=>hasPalindrome(word)).length," anagrams found");
