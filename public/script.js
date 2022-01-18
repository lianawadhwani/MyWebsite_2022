var buttons = {
  green: document.getElementById("green"),
  red: document.getElementById("red"),
  yellow: document.getElementById("yellow"),
  blue: document.getElementById("blue"),
  start : document.getElementById("start")
};

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
  },
  randomAdd: function(){
    var ran = Math.floor(Math.random() * 4);
    this.correctOrder.push(ran);
  },
  lightUp : function() {

    var i = 0;
    var correctOrder = this.correctOrder;
    function correctOrderLightUpLoop() {
      setTimeout(function() {
        var ran = correctOrder[i];
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
        if (i < correctOrder.length) {
          correctOrderLightUpLoop()
        }
      }, 1000)

    }

    correctOrderLightUpLoop();
  },
  update_state: function(){
    if (this.userOrder.length == this.correctOrder.length) {
      if (this.arraysMatch()) {
        this.userOrder = [];
        this.randomAdd();
        this.lightUp();
      } else {
        alert(" :( ");
        this.userOrder = [];
        this.correctOrder = [];
      }
    }
  },
  start: function(){
    this.randomAdd();
    this.lightUp();
    this.score = 0;
  }
};

buttons.green.addEventListener("click",function(){gameState.userOrder.push(0); gameState.update_state();});
buttons.red.addEventListener("click",function(){gameState.userOrder.push(1); gameState.update_state();});
buttons.blue.addEventListener("click",function(){gameState.userOrder.push(2); gameState.update_state();});
buttons.yellow.addEventListener("click",function(){gameState.userOrder.push(3); gameState.update_state();});
buttons.start.addEventListener("click",function(){gameState.start();});

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width=window.screen.width;
canvas.height=window.screen.height;
var context= canvas.getContext("2d");

var x=100;
var y=20;
var xstep= 1;
var ystep=.25;
window.requestAnimationFrame(function loop(){
context.clearRect(0,0, canvas.width, canvas.height);
if (x>innerWidth || x<0){
    xstep=-xstep;
    ystep=-ystep;
  }
  x+=xstep;
  y+=ystep;
context.fillStyle="pink";
context.fillRect(x,y, 100, 100);
window.requestAnimationFrame(loop);
});
