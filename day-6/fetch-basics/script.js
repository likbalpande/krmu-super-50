// // const printYes = () => {
// //     console.log("Yes");
// // };

// // const printNo = () => {
// //     console.log("No");
// // };

// // // H o F
// // const sum = (a, b, cb) => {
// //     const ans = a + b;
// //     cb(ans);
// // };

// // sum(10, 30, printYes);

// // ---------------------------------

// console.log("START");

// const printYes = () => {
//     console.log("Yes");
// };

// const printNo = () => {
//     console.log("No");
// };

// // H o F
// const sum = (a, b, cb) => {
//     console.log("--inside sum---");
//     const ans = a + b;
//     window.setTimeout(printNo, 1000);
//     cb(ans);
//     console.log("--sum is about to complete---");
// };

// sum(10, 30, printYes);

// console.log("END");

// -------------------------------------------

console.log("START");

const successData = (res) => {
    console.log("Data-->", res);
};

const printYes = (res) => {
    console.log("Yes");
    res.json().then(successData);
};

const printNo = (res) => {
    console.log("No");
};

window.fetch("https://dummyjson.com/products").then(printYes).catch();

console.log("END");
