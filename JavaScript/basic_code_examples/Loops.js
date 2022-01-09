// Basic while loop
let i = 0;
let total = 0;
while (i <= 20) {
	total += i;
	i+=2;
}
console.log(`The total is: ${total}`);

// Loop that utilizes falsey!
i = 3;
total = 0;
while (i) {
	total += i;
	i-=1;
}
console.log(`The total is: ${total}`);

// do while loop
i = 0;
total = 0
do {
	total+=i;
	i++;
} while (i <= 3);
console.log(total);

// for loop
for (let i = 0; i <= 3; i++) { 
  console.log(i);
}

// break out of loop
let sum = 0;
let target = 5;
while (true) {
  if (sum === target) break; // (*)
  sum++;
}
console.log(`Sum: ${sum}`);

// break/continue
sum = 0;
target = 6;
i = 0;
let j=0; 
for (; i <= 3; i++) {
	for (j=0; j <= 3; j++) {
		if ( i * j === target)
			break;  
	}
}
console.log(`Values at break out are: ${i},${j}`);

// break with labels
target = 6;
i = 0; 
j = 0;
outer: for (; i <= 3; i++) {
	for (j=0; j <= 3; j++) {
		console.log(`** ${i},${j}`);
		if ( i * j === target){
			console.log(`${i},${j}`);
			break outer;  
		}
	}
}
console.log(`Values at break out are: ${i},${j}`);


