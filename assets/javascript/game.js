var computerChoice = ["a","b","c","d","e","f","g",
					"h","i","j","k","l","m","n","o",
					"p","q","r","s","t","u","v","w",
					"x","y","z"];

var lettersGuessed = [];

var winScore = 0;

var loseScore = 0;

var guessesLeft = 10;

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

console.log("The computer first guessed the letter: " + computerGuess);
console.log("---------------------------------");

document.onkeypress = function(event) {
      
	var userGuess = event.key;

	if ((userGuess === computerGuess)) {
		guessesLeft = 10;
        winScore++;
        lettersGuessed = [];
        document.querySelector(".wins").innerHTML = "Wins: " + winScore;
        document.querySelector(".guessesLft").innerHTML = "Guesses left: " + guessesLeft;
        document.querySelector(".result").innerHTML = "You win! Try again!";
        document.querySelector(".guessesBox").innerHTML = "";
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        console.log("The player guessed the letter: " + userGuess);
        console.log("---------------------------------");
        console.log("The computer has now guessed the letter: " + computerGuess);
        return false;
     }

    if ((userGuess != computerGuess)) {
    	guessesLeft--;
    	lettersGuessed.push(userGuess);
    	document.querySelector(".guessesLft").innerHTML = "Guesses left: " + guessesLeft;
    	document.querySelector(".guessesBox").innerHTML = lettersGuessed;
    	document.querySelector(".result").innerHTML = "";
    	console.log("The player guessed the letter: " + userGuess);
    }
	
	if ((guessesLeft < 1)) {
    	guessesLeft = 10;
    	lettersGuessed = [];
    	document.querySelector(".result").innerHTML = "You lose! Try again!";
    	loseScore++;
    	document.querySelector(".losses").innerHTML = "Losses: " + loseScore;
    	document.querySelector(".guessesLft").innerHTML = "Guesses left: " + guessesLeft;
    	document.querySelector(".guessesBox").innerHTML = "";
    	computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    	console.log("---------------------------------");
        console.log("The computer has now guessed the letter: " + computerGuess);
    }    
}