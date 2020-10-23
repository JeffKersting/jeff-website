
                    //CLICK THE BUTTON FUNCTIONALITY//


//Variable Declarations
var buttonClick = document.querySelector(".clicks");
var clickCounts = 0;
var clicksDisplay = document.querySelector(".clickDisplay");
var clickReact = document.querySelector("#clickReact");
buttonClick.addEventListener("click", clickUp);
clicksDisplay.innerText = clickCounts;

//Button display functions
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
    case 30: displayClickReact("Really going for it...")
    break;
    case 40: displayClickReact("You've proved your point");
    break;
    case 50: displayClickReact("Seriously, no more")
    break;
    case 100: displayClickReactEnd("What are you doing with your life?");
    break;
  }
}
