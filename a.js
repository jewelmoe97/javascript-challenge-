console.log("practice")

// //1. Assign a new value to the variable num. The code will not work the way it is. Find the 
// mistake and fix it. Execute the corrected code.//

let num = 1;
num = 2;
console.log(num);

// Write a function that takes a string (a) and a number (n) as argument
//         Return the nth character of 'a'        `,

function myFunction(a, n) {
    return a[n - 1];
}

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result`,

function myFunction(a) {
    return a.slice(3);
}

// Write a function that takes a string (a) as argument
// Get the first 3 characters

function myFunction(a) {
    return a.slice(0, 3);
}
// Write a function that takes a string as argument
// The string contains the substring 'is'
// Return the index of 'is'`,

function myFunction(a) {
    return a.indexOf('is');
}
