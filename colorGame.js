var color = generateRandomNumbers(6);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    color = generateRandomNumbers(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor = color[i];
    
    square[i].addEventListener("click",function(){
       var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again!";
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
function changeColors(color){
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}
function generateRandomNumbers(num){
    var arr= [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}