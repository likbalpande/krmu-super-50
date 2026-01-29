// function palindrome(txt) {
//     console.log("txt:", txt);

//     for (let i = 0; i < 100000; i++) {
//         for (let j = 0; j < 10000; j++) {}
//     }

//     // --------------------------------
//     // const splitTxtWholeWord = txt.split();
//     // console.log("splitTxtWholeWord:", splitTxtWholeWord);
//     // const splitTxtBySpace = txt.split(" ");
//     // console.log("splitTxtBySpace:", splitTxtBySpace);
//     // --------------------------------

//     // --------------------------------
//     // const splitTxtByChar = txt.split("");
//     // console.log("splitTxtByChar:", splitTxtByChar);

//     // const reversedArr = splitTxtByChar.reverse();
//     // console.log("reversedArr:", reversedArr);

//     // const reversedStr = reversedArr.join("");
//     // console.log("reversedStr:", reversedStr);
//     // --------------------------------

//     // --------------------------------
//     const reversedStr = txt.split("").reverse().join("");
//     console.log("reversedStr:", reversedStr);
//     // --------------------------------
//     if (txt === reversedStr) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }

// palindrome("Hello World");

// --------------------------------------------------

// --------------------------------------------------
// function printF(val) {
//     console.log("--------------");
//     console.log("-->", val);
//     console.log("--------------");
// }

// function sum(a, b, nextStep) {
//     const ans = a + b;
//     nextStep(ans);
// }

// const x = 10;
// const y = 20;

// // HoF --> Higher Order Functions --> a function which
// //                                       --> takes another function as a parameter OR
// //                                       --> returns a function (we will see this in future)

// // Callback --> a function which is passed as an argument to another function

// const res = sum(x, y, printF);
// // sum --> HoF
// // printF --> Callback
// --------------------------------------------------

// 5 ways to write a function in JS

// --------- 1 - Function Declaration --------
// cons -  1. you can write invoke function before its declaration
//         2. you can make another function with same name
// sum(10, 20);

// function sum(a, b) {
//     const ans = a + b;
//     console.log(ans);
// }

// function sum(a, b) {
//     const ans = a - b;
//     console.log(ans);
// }

// // --------- 2 - Function Assignment (Named Function)--------
// // add(10, 20);
// const add = function sum(a, b) {
//     const ans = a + b;
//     console.log(ans);
// };
// add(10, 20);
// // re-declaration is NOT ALLOWED
// // const add = "hello";
// // re-assignment is NOT ALLOWED
// // add = "hello";

// // --------- 3 - Function Assignment (Anonymous Function)--------

// const add = function (a, b) {
//     console.log(a + b);
// };

// add(10, 20);

// // --------- 4 - ES6 - Arrow Function Assignment--------

const add = (a, b) => {
    console.log(a + b);
};

add(10, 20);

// ----------- 5 - IIFE -----------------------
