var gameState = {
  correctOrder : [],
  userOrder : [],
  score : 0,
  highScore : 0,
  high1:0,

  arraysMatch : function() {

    // Check if the arrays are the same length
    if (this.correctOrder.length !== this.userOrder.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < this.correctOrder.length; i++) {
      if (this.correctOrder[i] !== this.userOrder[i]) {
        return false;
      }
    }

    // Otherwise, return true
    this.score++;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      window.localStorage.setItem('high', this.highScore);
      this.high1 = window.localStorage.getItem('high');
      var j = document.getElementById("text");
      j.innerHTML = this.high1;
    }
    return true;
  }
};

var buttons = {
  green: document.getElementById("green"),
  red: document.getElementById("red"),
  yellow: document.getElementById("yellow"),
  blue: document.getElementById("blue"),
};
buttons.green.addEventListener("click",function(){gameState.userOrder.push(0); update_state();});
buttons.red.addEventListener("click",function(){gameState.userOrder.push(1); update_state();});
buttons.blue.addEventListener("click",function(){gameState.userOrder.push(2); update_state();});
buttons.yellow.addEventListener("click",function(){gameState.userOrder.push(3); update_state();});


function randomAdd() {
  var ran = Math.floor(Math.random() * 4);
  gameState.correctOrder.push(ran);
}

function lightUp() {

  var i = 0;

  function correctOrderLightUpLoop() {

    setTimeout(function() {
      var ran = gameState.correctOrder[i];
      if (ran == 0) {
        setTimeout(() => {
          buttons.green.classList.remove("active")
        }, 500);
        setTimeout(() => {
          buttons.green.classList.add("active")
        }, 1000);
      } else if (ran == 1) {
        setTimeout(() => {
          buttons.red.classList.remove("active")
        }, 500);
        setTimeout(() => {
          buttons.red.classList.add("active")
        }, 1000);
      } else if (ran == 2) {
        setTimeout(() => {
          buttons.blue.classList.remove("active")
        }, 500);
        setTimeout(() => {
          buttons.blue.classList.add("active")
        }, 1000);
      } else if (ran == 3) {
        setTimeout(() => {
          buttons.yellow.classList.remove("active")
        }, 500);
        setTimeout(() => {
          buttons.yellow.classList.add("active")
        }, 1000);
      }
      i++;
      if (i < gameState.correctOrder.length) {
        correctOrderLightUpLoop()
      }
    }, 1000)

  }

  correctOrderLightUpLoop();
}


function start() {
  randomAdd();
  lightUp();
  gameState.score = 0;
}

function update_state() {
  if (gameState.userOrder.length == gameState.correctOrder.length) {
    if (gameState.arraysMatch()) {
      gameState.userOrder = [];
      randomAdd();
      lightUp();
    } else {
      alert(" :( ");
      gameState.userOrder = [];
      gameState.correctOrder = [];
    }
  }
}
