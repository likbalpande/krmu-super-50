// --------------------------------------------

// // username
// const username = prompt("What is your name?");

// // age
// let age = null;

// do {
//     age = prompt("What is your age?");
//     console.log("age:", typeof age);
//     age = Number(age);
// } while (Number.isNaN(age) || age < 10 || age > 30);

// // if the age is invalid --> string or <10 or >30
// // ask his age once again until he enters correct

// // branch
// const branch = prompt("What is your branch?");

// // store it in object
// const student = {
//     rollNumber: "CSE101",
//     name: username,
//     age: age,
//     branch, // ES6 (if key and the variable name is same, then writing it once also works)
// };

// // show it on the console
// console.log(student);

// --------------------------------------------

// --------------------------------------------

// const obj = {
//     0: "Raj",
//     1: "Ramesh",
//     2: "Rakesh",
//     3: "Rohan",
// };
// // insertion
// obj["hello"] = "world";
// // delete
// delete obj[0];
// //update
// obj[1] = "New value";

// console.log("obj:", obj);

// // ------------------------------------------------------
// const arr = ["Raj", "Ramesh", "Rakesh", "Rohan"];
// // insertion
// arr[4] = "world";

// // // you can potentially create "holes" is you insert in array via index
// // --> arr[40] = "hello";
// // --> console.log("arr:", arr);

// // insertion
// arr.push("Hello");

// // // delete (potentially create "holes" is you insert in array via index)
// // --> delete arr[2];

// //delete
// // shift, pop, splice
// arr.splice(2, 1);

// //update
// arr[1] = "New value";

// console.log("arr:", arr);

// // ------------------------------------------------------

// const obj = { name: "Raj", city: "Delhi" };
// // Object.keys
// console.log("keys:", Object.keys(obj));
// // Object.values
// console.log("values:", Object.values(obj));
// // Object.entries
// console.log("entries:", Object.entries(obj));

// // ------------------------------------------------------
