document.addEventListener("DOMContentLoaded", () => {

// Variable declarations //
const grid = document.querySelector(".grid-display");
var squares = Array.from(document.querySelectorAll(".inner-grid"));
var restartButton = document.querySelector(".restartLevel");
var playerSquare;
var pushBlockSquare;
var endBlockSquare;
var obstacleBlockSquare;
var currentLevel = 0;
const rightLimits = [9,19,29,39,49,59,69,79,89,99];
const leftLimits = [0,10,20,30,40,50,60,70,80,90];
const upperLimits = [0,1,2,3,4,5,6,7,8,9];
const lowerLimits = [90,91,92,93,94,95,96,97,98,99];
var levels = [
{level: 1,
playerStart: 0,
pushBlockStart: 43,
endBlockStart: 99,
obstacleBlockStart: [44,45,54,55]},

{level: 2,
playerStart: 1,
pushBlockStart: 21,
endBlockStart: 13,
obstacleBlockStart: [0,10,20,30,40,50,2,12,22,32,42,52]},

{level: 3,
playerStart: 3,
pushBlockStart: 12,
endBlockStart: 9,
obstacleBlockStart: [5,15,25,35, 50,51,52,53,54,55,56]},

{level: 4,
playerStart: 1,
pushBlockStart: 11,
endBlockStart: 9,
obstacleBlockStart: [2,12,22,32,42,60]},
]


// Event Listeners //
document.addEventListener("keydown", function(e){// wasd key event
switch (e.keyCode){
case 65:
drawLeft();
break;
case 87:
drawUp();
break;
case 68:
drawRight();
break;
case 83:
drawDown();
break;
}
});
restartButton.addEventListener("click", restartLevel);

// Grid rendering functions //
// Game logic and player movement event handlers
function drawLeft(){
if(leftLimits.includes(playerSquare)) {
return;
}else if(leftLimits.includes(pushBlockSquare) && playerSquare === pushBlockSquare + 1){
return;
}else if(obstacleBlockSquare.includes(pushBlockSquare - 1) && pushBlockSquare + 1 === playerSquare){
return;
}else if(obstacleBlockSquare.includes(playerSquare - 1)){
return;
}else if (playerSquare === pushBlockSquare + 1){
squares[pushBlockSquare].classList.remove("pushBlock")
pushBlockSquare -= 1;
squares[pushBlockSquare].classList.add("pushBlock")
squares[playerSquare].classList.remove("player")
playerSquare -= 1;
squares[playerSquare].classList.add("player")
if(pushBlockSquare === endBlockSquare){
youWin();
}
return;
} else {
squares[playerSquare].classList.remove("player")
playerSquare -= 1;
squares[playerSquare].classList.add("player")
}
};
function drawUp(){
if(playerSquare <= 9){
return;
}else if(upperLimits.includes(pushBlockSquare) && playerSquare === pushBlockSquare + 10){
return;
}else if(obstacleBlockSquare.includes(pushBlockSquare - 10) && pushBlockSquare + 10 === playerSquare){
return;
}else if(obstacleBlockSquare.includes(playerSquare - 10)){
return;
}else if (playerSquare === pushBlockSquare + 10){
squares[pushBlockSquare].classList.remove("pushBlock")
pushBlockSquare -= 10;
squares[pushBlockSquare].classList.add("pushBlock")
squares[playerSquare].classList.remove("player")
playerSquare -= 10;
squares[playerSquare].classList.add("player")
if(pushBlockSquare === endBlockSquare){
youWin();
}
return;
} else {
squares[playerSquare].classList.remove("player")
playerSquare -= 10;
squares[playerSquare].classList.add("player")
}
};
function drawRight(){
if(rightLimits.includes(playerSquare)) {
return;
}else if(rightLimits.includes(pushBlockSquare) && playerSquare === pushBlockSquare - 1){
return;
}else if(obstacleBlockSquare.includes(pushBlockSquare + 1) && pushBlockSquare - 1 === playerSquare){
return;
}else if(obstacleBlockSquare.includes(playerSquare + 1)){
return;
}else if (playerSquare === pushBlockSquare - 1){
squares[pushBlockSquare].classList.remove("pushBlock")
pushBlockSquare += 1;
squares[pushBlockSquare].classList.add("pushBlock")
squares[playerSquare].classList.remove("player")
playerSquare += 1;
squares[playerSquare].classList.add("player")
if(pushBlockSquare === endBlockSquare){
youWin();
}
return;
} else {
squares[playerSquare].classList.remove("player")
playerSquare += 1;
squares[playerSquare].classList.add("player")
}
};
function drawDown(){
if(playerSquare >= 90){
return;
}else if(lowerLimits.includes(pushBlockSquare) && playerSquare === pushBlockSquare - 10){
return;
}else if(obstacleBlockSquare.includes(pushBlockSquare + 10) && pushBlockSquare - 10 === playerSquare){
return;
}else if(obstacleBlockSquare.includes(playerSquare + 10)){
return;
}else if (playerSquare === pushBlockSquare - 10){
squares[pushBlockSquare].classList.remove("pushBlock")
pushBlockSquare += 10;
squares[pushBlockSquare].classList.add("pushBlock")
squares[playerSquare].classList.remove("player")
playerSquare += 10;
squares[playerSquare].classList.add("player")
if(pushBlockSquare === endBlockSquare){
youWin();
}
return;
}else{
// squares[playerSquare].classList.add("playerDown"); Player movement draw example
// setTimeout(drawDownTransition, 70); left in incase wanting to reimplement
squares[playerSquare].classList.remove("player")
playerSquare += 10;
squares[playerSquare].classList.add("player")
}
};

// Level draw functions
function undrawLevel(){
squares[playerSquare].classList.remove("player");
squares[pushBlockSquare].classList.remove("pushBlock");
squares[endBlockSquare].classList.remove("endBlock");
obstacleBlockSquare.forEach(block => squares[block].classList.remove("obstacleBlock"));
};
function drawLevel(){
squares[playerSquare].classList.add("player");
squares[pushBlockSquare].classList.add("pushBlock");
squares[endBlockSquare].classList.add("endBlock");
obstacleBlockSquare.forEach(block => squares[block].classList.add("obstacleBlock")); //iterates thru obstacle block array and assigns class
currentLevel++;
};
function drawLevelStart(){
playerSquare = levels[currentLevel].playerStart;
pushBlockSquare = levels[currentLevel].pushBlockStart;
endBlockSquare = levels[currentLevel].endBlockStart;
obstacleBlockSquare = levels[currentLevel].obstacleBlockStart;
drawLevel()
};
function restartLevel(){
currentLevel--;
undrawLevel()
playerSquare = levels[currentLevel].playerStart;
pushBlockSquare = levels[currentLevel].pushBlockStart;
endBlockSquare = levels[currentLevel].endBlockStart;
obstacleBlockSquare = levels[currentLevel].obstacleBlockStart;
drawLevel()
};
function youWin(){
undrawLevel()
playerSquare = levels[currentLevel].playerStart;
pushBlockSquare = levels[currentLevel].pushBlockStart;
endBlockSquare = levels[currentLevel].endBlockStart;
obstacleBlockSquare = levels[currentLevel].obstacleBlockStart;
drawLevel()
};

document.querySelector("body").onload = drawLevelStart();
});
