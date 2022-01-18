function myDisplayer(num) {
  console.log(num);
}

function myDoubleDisplayer(num) {
  console.log(num*2);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, myDoubleDisplayer);
