const num1 = 100;
const num2 = 50;

console.log('**********************')
let val;

// Simple math with numbers
val = num1 + num2; // + - * / %(ramainder)

// Output
console.log(val);


console.log('**********************')

// Math Object
let val1;
val1 = Math.PI;

console.log(val1);
console.log('**********************');

let val2;
val2 = Math.E;

console.log(val2);
console.log('**********************')

let val3;
val3 = Math.round(2.8); // round to 3

console.log(val3);
console.log('**********************');

let val4;
val4 = Math.round(2.4); // round to 2

console.log(val4);
console.log('**********************');

let val5;
val5 = Math.ceil(4.4); // ceil to 5

console.log(val5);
console.log('**********************');

let val6;
val6 = Math.floor(7.8); // floor it down to 7

console.log(val6);
console.log('**********************');

let val7;
val7 = Math.sqrt(64); // square root--> 8

console.log(val7);
console.log('**********************');

let val8;
val8 = Math.abs(-15); // Absolute number

console.log(val8);
console.log('**********************');

let val9;
val9 = Math.pow(8, 2); // power of something -8 na drugi=64

console.log(val9);
console.log('**********************');

let val10;
val10 = Math.min(65,155,14,55,12,41); // Minimum

console.log(val10);
console.log('**********************');

let val11;
val11 = Math.max(65,155,14,55,12,41); // Maximum

console.log(val11);
console.log('**********************');

let val12;
val12 = Math.random(); // Random number in decimal

console.log(val12);
console.log('**********************');

let val13;
val13 = Math.random() * 20; 
/* 
Proper random number between 0-19.
If we want it to 20... math.random()*20+1;
*/

console.log(val13);
console.log('**********************');

/*
To get the proper fullnumber to 4example 20..
*/

let val14;
val14 = Math.floor(Math.random()* 20 + 1); // Minimum

console.log(val14);
console.log('**********************');
