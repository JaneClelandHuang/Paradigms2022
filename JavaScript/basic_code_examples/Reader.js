// Call this as:
// node Reader.js <Dronology.csv

const readline = require('readline'); 
const reader = readline.createInterface(process.stdin, null); 

const textRows = new Map(); 
let counter = 1;
reader.on('line', line => { 
	textRows.set(counter,line);
	counter++;
}).on('close', () => { 
	for (let [key, value] of textRows) {
		console.log(key,value);
	}
}); 