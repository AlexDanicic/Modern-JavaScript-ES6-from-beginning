let val;

// Number to String
val = 5;
val = String(5);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('*****************');


let val1;
val1 = String(4+4);
console.log(val1);
console.log(typeof val1);
console.log(val1.length);

console.log('*****************');

// Boolean to String
let val2;
val2 = String(true);
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

console.log('*****************');

// Date to String
let val3;
val3 = String(new Date());
console.log(val3);
console.log(typeof val3);
console.log(val3.length);

console.log('*****************');

// Array to String
let val4;
val4 = String([1,2,3,4,5,6]);
console.log(val4);
console.log(typeof val4);
console.log(val4.length);

console.log('*****************');

// toString() method
let val5;
val5 = (5).toString();
console.log(val5);
console.log(typeof val5);
console.log(val5.length);

console.log('*****************');

// Strings to numbers
let val6;
val6 = Number('5');
console.log(val6);
console.log(typeof val6);
//console.log(val6.length);
console.log(val6.toFixed());
console.log(val6.toFixed(2));

console.log('*****************');

// Number to Boolean
let val7;
val7 = Number(true); // true = 1; false = 0; null = 0
console.log(val7);
console.log(typeof val7);
console.log(val7.toFixed());

console.log('*****************');

// parseInt()
let val8;
val8 = parseInt('100.40');
console.log(val8);
console.log(typeof val8);
console.log(val8.toFixed(2));

console.log('*****************');

// parseFloat()
let val9;
val9 = parseFloat('100.40');
console.log(val9);
console.log(typeof val9);
console.log(val9.toFixed(2));

console.log('*****************');

const val10 = 5;
const val11 = 6;
const sum = val10 + val11;
console.log(sum);
console.log(typeof sum);

console.log('*****************');

const val12 = String(5);
const val13 = 6;
const sum1 = val12 + val13;
console.log(sum1);
console.log(typeof sum1);
