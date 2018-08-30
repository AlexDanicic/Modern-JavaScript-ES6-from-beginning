//===== PRIMITIVE TYPE =====//

// String
const name = 'John Doe';
console.log(typeof name);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null --it is a bug in JS...
/*
Null is primitive type, not object...
In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value, with the type tag for objects being 0 , and null was represented as the NULL pointer ( 0x00 on most platforms). As a result, null had 0 as a type tag, hence the bogus typeof return value (reference)
*/
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

//===== REFERENCE TYPE- Objects =====//

// Array
const hobbies = ['music', 'films', 'fishing', 'basketball'];
console.log(typeof hobbies);

// Object Literal
const address = {
    city: 'London',
    country: 'England',
}
console.log(typeof address);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);
