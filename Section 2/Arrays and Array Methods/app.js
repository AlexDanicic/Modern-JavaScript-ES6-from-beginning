// Create some arrays
const numbers = [83,80,75,12,24,31,10];
const numbers2 = new Array(22,46,74,11,13,17);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [83, 'Hello', true, undefined, null, {a:1, b:1,c:1}, new Date()];

// console.log(mixed);

//  Get Array Length

let val = numbers.length; 

console.log(numbers);
console.log(val);

console.log('**********************');
// Check if something is in array

let val1 = Array.isArray(numbers);

console.log(numbers);
console.log(val1);

console.log('**********************');
// Get single value. Arrays are zero based

let val2 = numbers[3];

console.log(numbers);
console.log(val2);

console.log('**********************');
// Insert into array

numbers[2] = 100;

console.log(numbers);

// find index of value

val3 = numbers.indexOf(31);

console.log(numbers);
console.log(val3);

console.log('**********************');

// Mutating arrays
// add on to end
val4 = numbers.push(183);

console.log(numbers);
console.log(val4);
console.log('**********************');

// add on to front
val5 = numbers.unshift(1983);

console.log(numbers);
console.log(val5);
console.log('**********************');

// take of from end
val6 = numbers.pop();

console.log(numbers);
console.log(val6);
console.log('**********************');

// take of from front
val7 = numbers.shift();

console.log(numbers);
console.log(val7);
console.log('**********************');

// splice values
val8 = numbers.splice(1,2);

console.log(numbers);
console.log(val8);
console.log('**********************');

// Reverse
val9 = numbers.reverse();

console.log(numbers);
console.log(val9);
console.log('**********************');

// concatenate array
val10 = numbers.concat(numbers2);

console.log(numbers);
console.log(val10);
console.log('**********************');

// sort
val11 = fruit.sort(function(x, y) {
    return x - y; // to reverse it...use y - x
});

// console.log(numbers);
console.log(val11);
console.log('**********************');

// find
function under50(num) {
    return num < 50;
}

val12 = numbers.find(under50);
console.log(numbers);
console.log(val12);
console.log('**********************');