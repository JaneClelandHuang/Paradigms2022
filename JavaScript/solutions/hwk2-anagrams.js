// Part 1.a: Anagrams
// Check if a string contains any two words that are anagrams of each other.

// alphabetize an individual string
function alphabetizeString(str){
	var arr = str.split('');
	var sorted = arr.sort();
	return sorted.join('');
}

// alphabetize all individual strings
function alphabetizeAllStrings(arr,omitString) {
	let alphabetizedStrings = arr.filter(word=>word!==omitString).map(word =>alphabetizeString(word)); // Uses filter + map to alphabetize strings
    return alphabetizedStrings;
}

// Checks if a word has an anagram in the globally defined string
function hasAnagram(word){
	let alphaList = alphabetizeAllStrings(testString,word);
	console.log(alphaList); // For testing
	let wordIndex = alphaList.indexOf(alphabetizeString(word));
	if((wordIndex > -1)){
		console.log(word, " is an anagram"); // Really for testing!
	    return true;
	} else
		return false;
}

// Helper function for loading the array
function convertStringToArray(string){
	let arr = string.split(" ");
	return arr;
}

// Some tests
const string1 = "on a cold winter's night, when the moon shone brightly through the clouds; and no stars were visible in the mono sky."
testString = convertStringToArray(string1);
console.log(testString.filter(word=>hasAnagram(word)).length," anagrams found");

//const string2 = "stop pots help taps not pats"
//testString = convertStringToArray(string2);
//console.log(testString.filter(word=>hasAnagram(word)).length," anagrams found");
