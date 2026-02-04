// // console.log("hello");

// console.log(window); // BOM
// console.dir(window.document); // DOM

// // getElementById
// // getElementsByClassName
// // querySelector
// // querySelectorAll

// const rootElement = document.getElementById("root");
// console.log("RootElement:", rootElement);

// rootElement.innerHTML = "<h1>Hello</h1>";
// rootElement.style.backgroundColor = "red";
// rootElement.style.padding = "16px";

// -----------------------------------------------

const rootElement = document.getElementById("root");

const title = document.createElement("h1");
title.innerText = "Hello";
title.className = "text-type-1";

rootElement.appendChild(title);
