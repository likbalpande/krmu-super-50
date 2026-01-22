// "use strict";

// function sum(a, b) {
//     console.log(a + b);

//     if (true) {
//         let c = 10; // var::function, let::block, const::block
//         console.log(c);
//     }
//     console.log(c);
// }

// sum(10, 20);

// ------------------------------------------

// "use strict";

// function sum(a, b) {
//     console.log(a + b);

//     if (true) {
//         var c = 10; // var::function, let::block, const::block
//         console.log(c);
//     }
//     console.log(c);
// }

// sum(10, 20);

// // ------------------------------------------

// "use strict";

// function sum(a, b) {
//     console.log(a + b);

//     if (true) {
//         var c; // var::function, let::block, const::block
//         console.log(c);
//     }
//     console.log(c);
// }

// sum(10, 20);

// // ------------------------------------------

// "use strict";

// function sum(a, b) {
//     console.log(a + b);

//     if (true) {
//         let c; // var::function, let::block, const::block
//         console.log(c);
//     }
//     console.log(c);
// }

// sum(10, 20);

// // ------------------------------------------

// "use strict";
// console.log("START");

// function sum(a, b) {
//     console.log(a + b);

//     if (true) {
//         console.log("in the block");
//         let c; // var::function, let::block, const::block
//         console.log("after declaration");
//         console.log(c);
//     }
//     console.log("sum done...");
// }

// sum(10, 20);

// console.log("END");

// // ------------------------------------------

// "use strict";
// console.log("START");

// function sum(a, b) {
//     console.log(a + b);

//     if (true) {
//         console.log("in the block");
//         var c; // var::function, let::block, const::block
//         console.log("after declaration");
//         console.log(c);
//     }
//     console.log("sum done...");
// }

// sum(10, 20);

// console.log("END");

// // ------------------------------------------

// console.log(c);

// var c = 10;

// console.log(c);

// // ------------------------------------------

// console.log(c);

// let c = 10;

// console.log(c);

// --------------------------------

// console.log(c);

// var c = 10;

// console.log(c);

// var c = 30;

// console.log(c);

// --------------------------------

// console.log(c);

// let c = 10;

// console.log(c);

// let c = 30;

// console.log(c);

// --------------------------------

// // Primitive & NON-Primitive

// const x = 2;
// x = 3;

// console.log(x);

// --------------------------------

// let a = 2; // number
// let b = "2"; // string

// if (a === b) {
//     //loose equality (value)
//     console.log("YES");
// } else {
//     console.log("False");
// }

//---------------------------------------

// const userInput = "123a";

// const num = Number(userInput);

// console.log("num:", num);

// if (Number.isNaN(num)) {
//     console.log("Invalid Input");
// } else {
//     console.log("Valid Input");
// }

//---------------------------------------

// if (2 == true) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

//---------------------------------------

// Non-primitives :: Objects
// Object, array, date, map, set, ...

// // create
// const obj = {
//     name: "Likhilesh",
// };

// // basics

// // --> the references are stored in stack
// // --> the values is stored in heap

// // CRUD

// // read
// console.log(obj);

// // updation
// // add a key value pair in obj
// obj["branch"] = "CSE";

// console.log(obj);

// // read single value by key
// console.log(obj["name"]);

// // deletion
// delete obj["name"];
// console.log(obj);

// //-----------------------------------

// const city = {
//     "City Name": "Delhi",
// };

// const capitalOfIndia = {
//     "City Name": "Delhi",
// };

// if (city === capitalOfIndia) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

//-----------------------------------

// const city = {
//     "City Name": "Delhi",
// };

// const capitalOfIndia = city;

// if (city === capitalOfIndia) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// // -----------------------------------

// const city = {
//     "City Name": "Delhi",
// };

// const capitalOfIndia = city; // shallow copy (mutability)

// console.log(city);
// console.log(capitalOfIndia);

// // capitalOfIndia["population"] = "2 CR";
// capitalOfIndia.population = "2 CR";

// console.log(city);
// console.log(capitalOfIndia);

// -----------------------------------

// const student = {
//     name: "Raj",
//     city: "Noida",
//     age: 23,
//     marks: {
//         maths: 90,
//         evs: 80,
//     },
// };

// console.log(student.country);

// // -----------------------------------

// // // de-structuring

// const student = {
//     name: "Raj",
//     city: "Noida",
//     age: 23,
//     marks: {
//         maths: 90,
//         evs: 80,
//     },
// };

// const { city, country } = student;

// console.log("city:", city);
// console.log("country:", country);

// -----------------------------------

// // de-structuring

// const student = {
//     name: "Raj",
//     city: "Noida",
//     age: 23,
//     marks: {
//         maths: 90,
//         evs: 80,
//     },
// };

// let { city, marks } = student;

// console.log("city:", city);
// console.log("marks:", marks);

// console.log("student", student);

// // replacing the old value with new value
// city = "Delhi";

// // mutating marks object by replacing the old value of "evs" with new value
// marks.evs = 40;

// console.log("student", student);

// -----------------------------------

// const raj = {
//     name: "Raj",
//     city: "Noida",
//     age: 23,
// };

// const ram = raj; // shallow

// ram.name = "Ram";
// console.log(raj);
// console.log(ram);

// // -----------------------------------

// const raj = {
//     name: "Raj",
//     city: "Noida",
//     age: 23,
// };

// // // spread or rest operator --> ... --> removes the outer most structure from the entity
// // console.log(raj); // address --> c1
// // console.log({ ...raj }); // address --> cd3

// const ram = { ...raj };
// // const ram = { ...{name: "Raj",city: "Noida",age: 23} };
// // const ram = { name: "Raj",city: "Noida",age: 23 };

// console.log("b4:", raj);
// console.log("b4:", ram);

// ram.name = "Ram";
// console.log("-->", raj);
// console.log("-->", ram);

// // -----------------------------------

// const raj = {
//     name: "Raj",
//     city: "Noida",
//     age: 23,
// };

// // const ram = raj;
// const ram = { ...raj };

// console.log("b4:", raj);
// console.log("b4:", ram);

// ram.name = "Ram";
// console.log("-->", raj);
// console.log("-->", ram);

// -----------------------------------

const raj = {
    name: "Raj",
    city: "Noida",
    age: 23,
    marks: {
        evs: 20,
        maths: 90,
    },
};

// const ram = raj;
const ram = { ...raj };

console.log("b4:", raj);
console.log("b4:", ram);

ram.name = "Ram";
ram.marks.evs = 70;
console.log("-->", raj);
console.log("-->", ram);

// -----------------------------------
