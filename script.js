var buttonClick = document.querySelector(".clicks");
var clickCounts = 0;
var clicksDisplay = document.querySelector(".clickDisplay");
var clickReact = document.querySelector("#clickReact");

buttonClick.addEventListener("click", clickUp)




//Click count button
clicksDisplay.innerText = clickCounts;
function reactClear(){
  clickReact.innerText = "";
}
function displayClickReact(message){
  clickReact.innerText = message;
  setTimeout(reactClear,1500);
}
function displayClickReactEnd(message){
  clickReact.innerText = message;
}
function clickUp(){
  clickCounts++;
  clicksDisplay.innerText = clickCounts;
  switch(clickCounts){
    case 10: displayClickReact("10 clicks eh?")
    break;
    case 20: displayClickReact("20...impressive!");
    break;
    case 30: displayClickReact("You can stop now")
    break;
    case 40: displayClickReact("You've proved your point");
    break;
    case 50: displayClickReact("Seriously, no more")
    break;
    case 100: displayClickReactEnd("What are you doing with your life?");
    break;
  }
}

//Grid functionality


document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", function(e){
    switch (e.keyCode){
      case 37:
      drawLeft();
      break;
      case 38:
      drawUp();
      break;
      case 39:
      drawRight();
      break;
      case 40:
      drawDown();
      break;
    }
  });
  const grid = document.querySelector(".gridDisplay");
  var squares = Array.from(document.querySelectorAll(".innerGrid"));
  var currentSquare = 0;
  var rightLimits = [9,19,29,39,49,59,69,79,89,99];
  var leftLimits = [0,10,20,30,40,50,60,70,80,90];
  squares[currentSquare].classList.add("player")

  function draw(){
    squares[currentSquare].classList.add("player")
  };

  function drawLeft(){
    if(leftLimits.includes(currentSquare)) {
      return;
    }else{
    squares[currentSquare].classList.remove("player")
    currentSquare -= 1;
    squares[currentSquare].classList.add("player")
    }
  };
  function drawUp(){
    if(currentSquare <= 9){
      return;
    }else{
    squares[currentSquare].classList.remove("player")
    currentSquare -= 10;
    squares[currentSquare].classList.add("player")
  }
};
  function drawRight(){
    if(rightLimits.includes(currentSquare)) {
      return;
    }else{
    squares[currentSquare].classList.remove("player")
    currentSquare += 1;
    squares[currentSquare].classList.add("player")
    }
  };
  function drawDown(){
    if(currentSquare >= 90){
      return;
    }else{
    squares[currentSquare].classList.remove("player")
    currentSquare += 10;
    squares[currentSquare].classList.add("player")
    }
  };

  function undraw(){
    squares[currentSquare].classList.remove("player")
  };
});
