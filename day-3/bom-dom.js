// ---------------------------------------------------------

// console.log(window.document);
// console.log(window.document.children);
// console.dir(window.document.children[0]);
// console.dir(window.document.children[0].children);
// console.dir(window.document.children[0].children[1].children);
// console.dir(window.document.children[0].children[1].children[0]);
// console.dir(window.document.children[0].children[1].children[0].children);

// const h1Elem = window.document.children[0].children[1].children[0].children[0];
// h1Elem.style.backgroundColor = "red";

// ---------------------------------------------------------

// const h1Element = document.getElementsByTagName("h1");
// --> getElementsByTagName
// --> getElementsByClassName
// --> getElementById
// --> querySelectorAll -->
// css: h1{ color:'red' } --> querySelectorAll('h1');
// css: #text{ color:'red' } --> querySelectorAll('#text');
// css: .card{ color:'red' } --> querySelectorAll('.card');
// --> querySelector

// console.log("h1Element:", h1Element);

// h1Element[0].style.backgroundColor = "red";
// h1Element[1].style.backgroundColor = "lime";

// ---------------------------------------------------------

// const h1Element = document.getElementsByTagName("h1");
// console.log("h1Element:", h1Element);

// // EVENTs
// const highlightHeading = () => {
//     const h1Element = document.getElementsByTagName("h1");

//     const currentBackgroundColor = getComputedStyle(h1Element[0]).backgroundColor;

//     if (currentBackgroundColor == "rgb(255, 0, 0)") {
//         h1Element[0].style.backgroundColor = "white";
//     } else {
//         h1Element[0].style.backgroundColor = "red";
//     }
// };

// ----------------------------------------------------------

console.log("START");

let flag = true;

// EVENTs
const highlightHeading = () => {
    const h1Element = document.getElementsByTagName("h1");

    if (flag) {
        h1Element[0].style.backgroundColor = "green";
    } else {
        h1Element[0].style.backgroundColor = "red";
    }

    flag = !flag;
};

console.log("END");
