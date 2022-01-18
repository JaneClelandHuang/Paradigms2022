let total = 0;

function myIncrementer(num) {
  return ++num;
}

function myDecrementer(num) {
  return --num;
}

function myPollCounter(total, myCallBack) {
  return myCallBack(total);
}

total = myPollCounter(total,myIncrementer);
total = myPollCounter(total,myIncrementer);
total = myPollCounter(total,myDecrementer);
total = myPollCounter(total,myIncrementer);
console.log(`Votes in favor of the motion: ${total}`);


