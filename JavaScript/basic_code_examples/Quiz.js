// Quiz-1
// Q1
var assert = require('assert');
const x = ["cat","dog","mouse"];
//assert.deepStrictEqual(x, ["cat","mouse","dog"]);
// Answer = "False".  

// Q4
function showMessage(sender, message) {
  sender = '*' + sender + '*';
  console.log(` ${sender} : ${message}` );
}
console.log(showMessage("Lucy"));

// Q5
function f0(flag,f1,f2){
        if(flag===1)
            f1();
        else
            f2();
}
let f3 = () => console.log( "f3" );
let f4 = () => console.log( "f4" );
f0(1,f3,f4)

//Q6
//const assert = require('assert');

const p = [1,4,9];
const q = [1,4,9]
function f(p,q){
	p = [1,1,1];
	q[2]=16;
}
f(p,q);
console.log(p,q);

