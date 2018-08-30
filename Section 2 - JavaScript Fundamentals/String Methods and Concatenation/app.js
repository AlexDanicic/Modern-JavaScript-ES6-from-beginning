const firstName = 'Alexander';
const lastName = 'Danicic';
const age = 35;
const str = 'Hello there my name is Alex';
const tags = 'web design,web development,programming';
let val;

val = firstName + lastName;

console.log(val);
console.log('******************');

// CONCATENATION

let val1;

val1 = firstName + ' ' + lastName;

console.log(val1);

console.log('******************');

// APPENDING
let val2;

val2 = 'Dora ';
val2 += lastName;

console.log(val2);

console.log('******************');

let val3;

val3 = 'Hello, my name is ' + firstName + ' ' + lastName + ' and I am ' + age + ' years old.';

console.log(val3);

console.log('******************');

// Template literals
let val4;

val4 = `Hello, my name is ${firstName} ${lastName} and I am ${age}  years old.`;

console.log(val4);

console.log('******************');

// ESCAPING

let val5;

val5 = 'That\'s awesome, I can\'t wait!' ;

console.log(val5);
console.log('******************');

// LENGTH

let val6;

val6 = firstName.length;

console.log(val6);
console.log('******************');

// CONCAT

let val7;

val7 = firstName.concat(' ',lastName);

console.log(val7);
console.log('******************');

// TO UPPERCASE

let val8;

val8 = (firstName.concat(' ',lastName)).toUpperCase();

console.log(val8);
console.log('******************');

// TO LOVERCASE

let val9;

val9 = (firstName.concat(' ',lastName)).toLowerCase();

console.log(val9);
console.log('******************');


// INDEX OF

let val10;

val10 = firstName.indexOf('d');

console.log(val10);
console.log('******************');

// LAST INDEX OF

let val11;

val11 = firstName.lastIndexOf('e');

console.log(val11);
console.log('******************');

// CHAR AT

let val12;

val12 = firstName.charAt('2');

console.log(val12);
console.log('******************');

// GET LAST CHARACTER

let val13;

val13 = firstName.charAt(firstName.length -1);

console.log(val13);
console.log('******************');

// SUBSTRING

// let val14;

val14 = firstName.substring(0, 5);

console.log(val14);
console.log('******************');

// SLICE

val15 = firstName.slice(1, 5);
/* or -3 ...that will take from last 3
*/

console.log(val15);
console.log('******************');

// SPLIT
/* split this example with spaces...we will got an array*/
val16 = str.split(' ');

console.log(val16);
console.log('******** or ********');
/* split it by comma...we will have an array with each tag*/
val17 = tags.split(',');

console.log(val17);
console.log('******************');

// REPLACE

val18 = str.replace('Alex','Acke');

console.log(val18);
console.log('******************');

// INCLUDES

val19 = str.includes('Hello');

console.log(val19);
if (val19 = str.includes('Hello')) {
    console.log('Essam ti rekao');
} else {
    console.log('Nema sanse');
}
console.log('******************');