//Learn Basic Debugging Building a Random Background Color Changer - freecodecamp.org

const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];

function getRandomIndex() {

    //Math.floor rounds a number down to the nearest whole number
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
};

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

console.log(bgHexCodeSpanElement);
