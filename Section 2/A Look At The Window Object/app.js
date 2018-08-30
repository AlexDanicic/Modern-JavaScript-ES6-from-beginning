// Window Methods / Objects / Properties
console.log(123);
window.console.log(123);

// Alert
// window.alert('Hello from window');
// Prompt

// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are You Sure?!')){
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// Outer Height
val1 = window.outerHeight;
console.log(val1);

// Outer Width
val2 = window.outerWidth;
console.log(val2);

// Inner Height
val3 = window.innerHeight;
console.log(val3);

// Inner Width
val4 = window.innerWidth;
console.log(val4);

// Scroll Points
// these are only available when we have a scroll baron window
// This is good for animations..
val5 = window.scrollY;
console.log(val5);

val6 = window.scrollX;
console.log(val6);

// Location Object
val7 = window.location;
console.log(val7);
// ..or everithing from location
val8 = window.location.hostname;
console.log(val8);

// History Object
// val9 = window.history.go(-5);
// console.log(val9);


// this will show to us the history...in numbers
val10 = window.history.length;
console.log(val10);

// Navigator Object
// geolocations, platform, appName, appVersion, userAgent..and more things
val11 = window.navigator;
console.log(val11);

val12 = window.navigator.platform;
console.log(val12);