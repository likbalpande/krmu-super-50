const secondElement = document.getElementById("second");

const minuteElement = document.getElementById("minute");

let time = 0;
let intervalId = null;

const handleStart = () => {
    intervalId = setInterval(handleUI, 1000);
};

const handleUI = () => {
    time += 1;
    secondElement.innerText = time % 60;
    minuteElement.innerText = Math.floor(time / 60) % 60;
};

const handleStop = () => {
    clearInterval(intervalId);
};
