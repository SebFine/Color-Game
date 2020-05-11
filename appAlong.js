const colors = getRandomRgb();
const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#rgb");
const displayResult = document.querySelector("#result");
const header = document.querySelector(".header");
const pickedColor = pickColor();

function getRandomRgb() {
    const arr = [];
    for (i=0; i<6; i++) {
    colorToGuessArr = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    colorToGuessStr = `rgb(${colorToGuessArr.join(", ")})`;
    arr.push(colorToGuessStr);
    }
    return arr;
}

function pickColor() {
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

colorDisplay.textContent = pickedColor;

for (i = 0; i < squares.length; i++) {
    //add inital colors
    squares[i].style.backgroundColor = colors[i];
    //add click listener to square
    squares[i].addEventListener("click", function () {
        // grab color of clicked square
        if (pickedColor === this.style.backgroundColor) {
            displayResult.textContent = ("That´s Right!");
            changeColors(pickedColor);
            header.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            displayResult.textContent = ("Try Again!");
        }

    });
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
}