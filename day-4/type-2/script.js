const handleRootClick = (ev) => {
    console.log("root clicked");
    console.log(ev, ev.target);
};

const handleParentClick = (ev) => {
    console.log("parent clicked");
    console.log(ev, ev.target);
};

const handleChildClick = (ev) => {
    console.log("child clicked");
    console.log(ev, ev.target);
};

const rootElement = document.getElementById("root");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

childElement.addEventListener("click", handleChildClick, true);
parentElement.addEventListener("click", handleParentClick, false);
rootElement.addEventListener("click", handleRootClick, true);
