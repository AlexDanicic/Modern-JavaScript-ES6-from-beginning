// if (something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// EQUAL TO
if(id == 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// NOT EQUAL TO
if(id != 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// EQUAL TO VALUE AND TYPE
if(id === 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// NOT EQUAL TO VALUE AND TYPE
if(id !== 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// test if there is an ID..
if (typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} else {
    console.log('There is no ID');
}

// Greathe or less than...
if (id >= 200) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// If Else..

const color = 'yellow';

if (color === 'red') {
    console.log('Color is red');
} else if(color === 'blue') {
    console.log('Color is blue');
} else if(color === 'green') {
    console.log('Color is green');
} else if(color === 'black') {
    console.log('Color is black');
} else {
    console.log('Color is not red, blue, green or black');
}

// Logical Operators
// AND &&
const name = 'Steve';
const age = 12;

if(age > 0 && age <= 12) {
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} can not run in race!`);
} else {
    console.log(`${name} is registered for the race!`);
}

// Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without baces..but this is not a good practice at all!
if(id ===100)
    console.log('This is correct');
else
    console.log('This is incorrect');    