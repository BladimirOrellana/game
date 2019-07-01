
    var you = document.getElementById("you");
    var computer = document.getElementById("computer");
    var youWin = document.getElementById("youWin");
    var yourLosses = document.getElementById("yourLosses");
    var YouGuessed = document.getElementById("YouGuessed");
    var userGuessesLeft = document.getElementById("userGuessesLeft");
    var yourGuessesSoFar = document.getElementById("yourGuessesSoFar");

   
  
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
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
document.getElementById("c").onclick = getLetter;
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

document.getElementById("YouGuessed").innerHTML = "YOU GUESSED!";
  
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

}


//This set the Guesses left
userGuessesLeft.textContent = guessesLeft--;
if(guessesLeft === 0){
   
   document.getElementById("main-container").style.display = "none";
   document.getElementById("main-container-hidden").style.display = "block";


   
}

}




document.getElementById("enter").onclick = startGame;
function startGame(){
lunchScreen();
}

 document.getElementById("tryAgain").addEventListener("click", reloadGame);


function reloadGame(){
    location.reload();
    document.getElementById("lonchScreen").style.display = "none";
document.getElementById("main-container-hidden").style.display = "none";
document.getElementById("main-container").style.display = "block";
   
   
    
    lunchScreen();
  gameLogic();

}