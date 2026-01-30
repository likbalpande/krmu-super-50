const rootElement = document.getElementById("root");

const getRandomColorVal = () => {
    const randomVal = Math.random();
    const scaledVal = randomVal * 255;
    const floorVal = Math.floor(scaledVal);
    return floorVal;
};

const callbackFunction = () => {
    const red = getRandomColorVal();
    const green = getRandomColorVal();
    const blue = getRandomColorVal();
    rootElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

const delay = 1000; //milliseconds

// window.setTimeout(callbackFunction, delay);

window.setInterval(callbackFunction, 1000);
