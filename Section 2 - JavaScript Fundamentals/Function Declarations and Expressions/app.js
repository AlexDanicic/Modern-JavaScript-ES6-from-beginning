// Function Declarations

function greet() {
    console.log('Hello');    
}

greet();
// or..

function greet1() {
    return 'Hellooo';
}
 console.log(greet1());

// another option..

function greetToSomeone(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`;
}
console.log(greetToSomeone('Alex', 'Danicic'));

// before ES6..
function greetToSomeone1(firstName, lastName) {
    if(typeof firstName === 'undefined') {firstName = 'John'}
    if(typeof lastName === 'undefined') {lastName = 'Doe'}
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greetToSomeone1());

// Function Expressions

const square = function(x) {
    return x * x;
};
console.log(square(12));

// or..

const square1 = function(x = 3) {
    return x * x;
};
console.log(square1());

// or...we can usethe default value..x = 5, but that is only applicable, if we do not pass something in console.log square2 parameter.

const square2 = function(x = 5) {
    return x * x;
};
console.log(square2(12));

// Immidiately Invokable Function Expressions = IIFEs


(function() {
    console.log('IIFE Ran..')
})();

// or with parameters

(function(name) {
    console.log(`Hello ${name}`);
})('Alexander');


// Property Methods

const todo = {
    add: function() {
        console.log('Add todo..');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();