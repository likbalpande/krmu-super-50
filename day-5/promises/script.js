console.log("--A--");

const successCB = () => {
    console.log("D...");
};

const errorCB = () => {
    console.log("E...");
};

const pr = fetch("https://api.github.com/users/likbalpande");

console.log("B");

pr.then(successCB).catch(errorCB);

console.log("C");
