var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares=3;
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
			squares[i].style.display="block"
			squares[i].style.backgroundColor = colors[i];
		
		}
	})
resetButton.addEventListener("click", function(){
	// gen new colors
	colors = generateRandomColors(numOfSquares);
	// pick new rand color from array
	pickedColor= pickColor();
	// change colors of squares
	colorDisplay.textContent = pickedColor;
	this.textContent ="NEW COLORS";
	messageDisplay.textContent = "";

	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor="steelblue";

})
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners
	squares[i].addEventListener("click", function(){
		
		//grab color
		var clickedColor=this.style.backgroundColor
		// compare color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}else{
			this.style.backgroundColor ="#232323"
			messageDisplay.textContent = "Try Again"
		}
	})
}
function changeColors(color) {
	//loop through
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr=[]
	// add num
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
		//get random color and push into arr
	}
	//return
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255 
	var r = Math.floor(Math.random()* 256);
	// green 0 - 255
	var g = Math.floor(Math.random()* 256);
	// blue 0-255
	var b = Math.floor(Math.random()* 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
