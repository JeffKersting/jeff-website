document.addEventListener("DOMContentLoaded", () =>{

  var simonStart = document.querySelector(".center-button");
  var redButton = document.querySelector(".red-button");
  var blueButton = document.querySelector(".blue-button");
  var yellowButton = document.querySelector(".yellow-button");
  var greenButton = document.querySelector(".green-button");
  var buttonArray = Array.from(document.querySelectorAll(".game-button"));

  var beep = document.querySelector("#beep");
  var piano1 = document.querySelector("#piano1");
  var piano2 = document.querySelector("#piano2");
  var piano3 = document.querySelector("#piano3");
  var piano4 = document.querySelector("#piano4");

  var gameOn = false;
  var currentGame = [];
  var playerGame = [];



  // Event Listeners
  simonStart.addEventListener("click", startSimon);
  redButton.addEventListener("click", glowButtonRed);
  blueButton.addEventListener("click", glowButtonBlue);
  yellowButton.addEventListener("click", glowButtonYellow);
  greenButton.addEventListener("click", glowButtonGreen);

  // Game functions

  function playButtons(num) {
    switch (num) {
      case 1:
        glowButtonRed()
        currentGame.push(1)
        break;
      case 2:
        glowButtonBlue()
        currentGame.push(2)
        break;
      case 3:
        glowButtonYellow()
        currentGame.push(3)
        break;
      case 4:
        glowButtonGreen()
        currentGame.push(3)
        break;
    }
  }

  function checkButtons(){
    currentGame.forEach(element => {
      playButtons(element)
    });
  };



  function addSequence() {
    buttonArray.push(getRandom())
  };

  function getRandom() {
    return Math.ceil(Math.random() * 4)
  };

  // Button Event Handlers
  function startSimon(){
    currentGame.push(getRandom())
    beep.play();
    initialDepressStart(simonStart)
    setTimeout(buttonDepressStart, 70, simonStart)
    var gameOn = true;
    checkButtons();
  }
  function glowButtonRed(){
    piano1.currentTime = 0;
    piano1.play()
    initialDepress(redButton)
    setTimeout(buttonDepress, 70, redButton)
  }
  function glowButtonBlue(){
    piano2.currentTime = 0;
    piano2.play()
    initialDepress(blueButton)
    setTimeout(buttonDepress, 70, blueButton)
  }
  function glowButtonYellow(){
    piano3.currentTime = 0;
    piano3.play()
    initialDepress(yellowButton)
    setTimeout(buttonDepress, 70, yellowButton)
  }
  function glowButtonGreen(){
    piano4.currentTime = 0;
    piano4.play()
    initialDepress(greenButton)
    setTimeout(buttonDepress, 70, greenButton)
  }
  function initialDepressStart(element){
    element.classList.add("center-depress");
  }
  function buttonDepressStart(element){
    element.classList.remove("center-depress");
  }
  function initialDepress(element){
    element.classList.add(element.id);
  }
  function buttonDepress(element){
    element.classList.remove(element.id);
  }



});
