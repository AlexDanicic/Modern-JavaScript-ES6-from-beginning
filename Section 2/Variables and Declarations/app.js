// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith'
// console.log(name);

// Init the variable...initialize
var greeting;
console.log(greeting);
greeting = 'Helloooo';
console.log(greeting);

// letters, numbers, underscore, $
// Can not start with number

// Multy word variable
var firstName = "Dora"; // Camel case
var first_name = "Alex"; // underscore convention
var FirstName = "Lazar"; // Pascal case ,we use them usually for OOP, Constructor functions https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
var firstname; // -- do not use this, it is unreadable

/* let */
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith'
// console.log(name);

//or...
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith'
// console.log(name);


/* const 

we can not reassign it

*/
// const name = 'John Doe';
// console.log(name);
// name = 'Steve Smith'
// console.log(name);
// we have to assign a value to const, if not..error
//const greeting; // Missing initializer in const declaration

const person = {
    name: 'Alex',
    age: 35
}
// we can change the name but can not change/reassign the 'person'
person.name = 'Dora';
person.age = 37

//console.log(person);

// same thing with arrays...

const numbers = [1,2,3,4,5];
numbers.push(6)
console.log(numbers);