const person = {
    firstName: 'Alex',
    lastName: 'Danicic',
    age: 35,
    email: 'alex.danicic@gmail.com',
    hobbies: ['coding', 'gardening'],
    address: {
        town: 'Middleton',
        country: 'UK'
    },
    getBirthYear : function(){
        return 2018 - this.age;
    }
}

let val;
val = person;
console.log(val);

// get specific value

let val1;
val1 = person.firstName;
console.log(val1);

val2 = person['firstName'];
console.log(val2);

val3 = person.address;
console.log(val3);

val4 = person.getBirthYear();
console.log(val4);

const people = [
    {name: 'Dora', age: 37},
    {name: 'Petra', age: 2},
    {name: 'Lazar', age: 8}    
];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}