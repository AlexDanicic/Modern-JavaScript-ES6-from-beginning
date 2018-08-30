// documentation for this lesson : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// today date

let val;

const today = new Date();

val = today;

console.log(val);
console.log(typeof val);

let birthday = new Date('10-12-1983 20:55:00');
val1 = birthday;
console.log(val1);

let birthday1 = new Date('October 12 1983');
console.log(birthday1);

let birthday2 = new Date('10/12/1983');
console.log(birthday2);

let birthday3 = new Date('12 October 1983');
console.log(birthday3);


// Months are zero based!
val4 = today.getMonth();
console.log(val4);

val5 = today.getDate();
console.log(val5);
// it's start with sunday
val6 = today.getDay();
console.log(val6);

val7 = today.getFullYear();
console.log(val7);

val8 = today.getHours();
console.log(val8);

val9 = today.getMinutes();
console.log(val9);

val10 = today.getSeconds();
console.log(val10);

val11 = today.getMilliseconds();
console.log(val11);
//  seconds from 1-1-1970
val12 = today.getTime();
console.log(val12);

// SET TIME...

// mdn...