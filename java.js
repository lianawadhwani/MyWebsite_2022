var blueButton=document.getElementById('blueButton');
var yellowButton=document.getElementById('yellowButton');
var redButton=document.getElementById('redButton');
var greenButton=document.getElementById('greenButton');

var correctOder=[];
var userOrder=[];
var on=false;


document.getElementById("start").addEventListener("click", function() {
  on=true;
  startGame();
});

function green(){
      greenButton.classList.toggle("green");
}

function red() {
  redButton.classList.toggle("red");
}
function blue() {
  blueButton.classList.toggle("blue");
}
function yellow(){
  yellowButton.classList.toggle("yellow");
}

function random(){
   playerLevel.push(getRandomInt(4));
}
