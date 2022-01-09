function coder(operation,string){
	return operation(string);
}

function encode(message){
	let encodedString = ""
	for (let i = message.length; i >=0; i--) {
		if (message.charAt(i)===' '){
			encodedString = encodedString + "+";
		} else {
			encodedString = encodedString + (message.charAt(i));
		}
		let chance = Math.floor((Math.random() * 5) + 1);
		if (chance === 3)
			encodedString = encodedString+"?";
	}
	return encodedString;
}

function decode(message){
	let decodedString = "";
	for (let i = message.length; i >=0; i--) {
		if (message.charAt(i) !=='?'){
			if (message.charAt(i)==='+'){
				decodedString = decodedString + ' ';
			} else {
				decodedString = decodedString + (message.charAt(i));
			}
		}
	}
	return decodedString;
}

let secretMessage = coder(encode,"the hairy caterpillar will land at dusk");
console.log(secretMessage);

let decodedMessage = coder(decode,secretMessage);
//console.log(decodedMessage);

