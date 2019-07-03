
    var you = document.getElementById("you");
    var computer = document.getElementById("computer");
    var youWin = document.getElementById("youWin");
    var yourLosses = document.getElementById("yourLosses");
    var YouGuessed = document.getElementById("YouGuessed");
    var userGuessesLeft = document.getElementById("userGuessesLeft");
    var yourGuessesSoFar = document.getElementById("yourGuessesSoFar");
    var myAudio = document.getElementById("myAudio");
    var myAudioEnd = document.getElementById("myAudioEnd");
    

    var c = document.getElementById("c").getContext("2d");
    c.save();
    c.fillStyle = "green";
    c.fillRect(0,280,300,20);
    c.restore();
    c.save();
    c.fillStyle = "burlywood";
    c.fillRect(10,60,10,220);
    c.restore();
    c.save();
    c.fillStyle = "burlywood";
    c.fillRect(10,60,110,10);
    c.restore();
    c.save();
    c.fillStyle = "orange";
    c.fillRect(100,60,1,50);
    c.restore();
  
    var wins = 0;
    var losses = 0;
    var guessesLeft = 8;
    var yourGuessesSoFar = 0;
 
  
   
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
 "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
 userGuessesLeft.textContent = guessesLeft;


function lunchScreen(){
  document.getElementById("lonchScreen").style.display = "none";
  document.getElementById("main-container").style.display = "block";
}

document.getElementById("a").onclick = getLetter;
document.getElementById("b").onclick = getLetter;
document.getElementById("C").onclick = getLetter;
document.getElementById("d").onclick = getLetter;
document.getElementById("e").onclick = getLetter;
document.getElementById("f").onclick = getLetter;
document.getElementById("g").onclick = getLetter;
document.getElementById("h").onclick = getLetter;
document.getElementById("i").onclick = getLetter;
document.getElementById("j").onclick = getLetter;
document.getElementById("k").onclick = getLetter;
document.getElementById("l").onclick = getLetter;
document.getElementById("m").onclick = getLetter;
document.getElementById("n").onclick = getLetter;
document.getElementById("o").onclick = getLetter;
document.getElementById("p").onclick = getLetter;
document.getElementById("q").onclick = getLetter;
document.getElementById("r").onclick = getLetter;
document.getElementById("s").onclick = getLetter;
document.getElementById("t").onclick = getLetter;
document.getElementById("u").onclick = getLetter;
document.getElementById("v").onclick = getLetter;
document.getElementById("w").onclick = getLetter;
document.getElementById("x").onclick = getLetter;
document.getElementById("y").onclick = getLetter;
document.getElementById("z").onclick = getLetter;

function getLetter(){
var target = event.target || event.srcElement;
var lower = target.id;
var  userChoice = lower;


var randondAlphabet = alphabet[Math.floor(Math.random()* alphabet.length)];

     

computer.textContent = randondAlphabet;

you.textContent = userChoice;

if(userChoice ===randondAlphabet){
  wins++;
youWin.textContent = wins;

YouGuessed.textContent = "You Guessed it";
  
}else{
   losses++;
   yourLosses.textContent = losses;
   YouGuessed.textContent = "Try Again";
}
 
if(wins == losses){
document.getElementById("yourGuessesSoFar").innerHTML = "Is a Tie" ;
document.getElementById("yourGuessesSoFar").style.color = "orange";
}else if(wins > losses){
document.getElementById("yourGuessesSoFar").innerHTML = " You're Wining" ;
document.getElementById("yourGuessesSoFar").style.color = "green";
}else{
document.getElementById("yourGuessesSoFar").innerHTML = " You're Lossing";
document.getElementById("yourGuessesSoFar").style.color = "red";

if(losses === 1){
  myAudio.play();
  c.save();
  c.fillStyle = "orange";
  c.beginPath();
  c.arc(100, 120, 20, 0, 2 * Math.PI);
c.stroke();
  c.restore();
}else if(losses === 2){
  myAudio.play();
  c.save();
  c.fillStyle = "black";
  c.fillRect(100,135,1,70);
  c.restore();
}else if(losses === 3){
  myAudio.play();
  c.save();
  c.fillStyle = "black";
  c.beginPath();
  c.arc(90, 115, 2, 0, 2 * Math.PI);
c.stroke();
  c.restore();
}else if(losses === 4){
  myAudio.play();
  c.save();
  c.fillStyle = "black";
  c.beginPath();
  c.arc(110, 115, 2, 0, 2 * Math.PI);
  c.stroke();
c.restore();
}else if(losses === 5){
  myAudio.play();
  c.save();
  c.fillStyle = "black";
  c.beginPath();
c.lineCap = "round";
c.moveTo(99, 155);
c.lineTo(80, 170);
c.stroke();
  c.restore();
}else if(losses === 6){
  myAudio.play();
  c.save();
  c.fillStyle = "black";
  c.beginPath();
c.lineCap = "round";
c.moveTo(101, 155);
c.lineTo(120, 170);
c.stroke();
  c.restore();
}else if(losses === 7){
  myAudio.play();
  c.save();
  c.fillStyle = "black";
  c.beginPath();
c.lineCap = "round";
c.moveTo(101, 200);
c.lineTo(120, 250);
c.stroke();
  c.restore();
}else if(losses === 8){
  myAudioEnd.play();
  c.save();
  c.fillStyle = "black";
  c.beginPath();
c.lineCap = "round";
c.moveTo(99, 200);
c.lineTo(80, 250);
c.stroke();
  c.restore();
}


}


//This set the Guesses left
userGuessesLeft.textContent = guessesLeft--;
if(guessesLeft === -1){
   
   document.getElementById("main-container").style.display = "none";
   document.getElementById("main-container-hidden").style.display = "block";


   
}

}




document.getElementById("enter").onclick = startGame;
function startGame(){
lunchScreen();
}


 document.getElementById("tryAgain").addEventListener("click", reloadGame);

function reset(){
  wins = 0;
  losses = 0;
  guessesLeft = 10;
  youWin.textContent = wins;
  yourLosses.textContent = losses;
  YouGuessed.textContent = "";
   you.textContent = "";
   computer.textContent = "";
   youWin.textContent = "";
   yourLosses.textContent = "";
    userGuessesLeft.textContent = "";
    document.getElementById("yourGuessesSoFar").innerHTML = "" ;
}

function clearCanvas() {
  c.clearRect(0, 0, c.width, c.height);
  var w = c.width;
  c.width = 1;
  c.width = w;
}

function reloadGame(){
  clearCanvas();
  reset();
    document.getElementById("lonchScreen").style.display = "none";
document.getElementById("main-container-hidden").style.display = "none";
document.getElementById("main-container").style.display = "block";
   
  lunchScreen();
  gameLogic();


}