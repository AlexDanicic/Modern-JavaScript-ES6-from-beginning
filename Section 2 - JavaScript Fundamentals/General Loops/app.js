// For Loop
console.log('=============== For Loop ==============');


for (let i = 0; i < 10; i++) {
    // console.log(`Number ${i}`);
    if(i === 2) {
        console.log(`2 is my favorite number`);
        continue;
    }

    if(i === 5) {
        console.log('Stop the loop here');
        break;
    }
    console.log(`Number ${i}`);
}

console.log('=============== While Loop ==============');
// While Loop

let j = 0;

while(j < 10) {
    console.log(`Number ${j}`);
    j++;
}

console.log('=============== Do While Loop ==============');
// Do While Loop

let i = 0;
do {
    console.log(`Number ${i}`);
    i++;
} while (i < 10);

console.log('=============== Loop Through Array ==============');
// Loop Through Array
const cars = ['BMW', 'Audi', 'Toyota', 'Honda'];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log('=============== ForEach Loop ==============');
// forEach Loop

cars.forEach(function(car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
});


console.log('=============== Map ==============');

// Map
const users = [
    {id: 1, name:'John'},
    {id: 2, name:'Paul'},
    {id: 3, name:'Josh'}
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);

console.log('=============== ForIn Loop ==============');
// For In Loop

const user = {
    firstName: 'Alex',
    lastName: 'Danicic',
    age: 35
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}