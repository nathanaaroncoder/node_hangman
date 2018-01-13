var inquirer = require("inquirer");
var letters = require("./letters.js");

console.log("\n==============================================");
console.log(`Welcome to Hangman!`);
console.log("==============================================\n");

var guessesLeft = 12;
var letterinWord = false;
var win = false;
var lose = false;
var wrongGuesses = [];
var chosenWord;
var chosenLettersObj;
var chosenWordBlanked;
var currentNumBlanks;
var currentWordSplit;
var impList = letters.wordsList;

function chooseWord(){
	chosenWord = impList[Math.floor(Math.random() * impList.length)];
	chosenLettersObj = new letters.LetterObj(chosenWord);
	chosenLettersObj.createBlanks();
	chosenWordBlanked = chosenLettersObj.blanksAndSuccesses;
	currentNumBlanks = chosenLettersObj.blanks;
	currentWordSplit = chosenLettersObj.letters;
}

chooseWord();



function guess(){
	console.log(`\nYou have ${guessesLeft} guesses left.`);
	console.log(`Your word: ${chosenWordBlanked.join("")}\n`)
	inquirer.prompt([

  {
    type: "input",
    name: "guess",
    message: "Guess a letter!"
  }

	]).then(function(user) {

		for (var i = 0; i < currentWordSplit.length; i++) {
			if (user.guess === currentWordSplit[i]) {
			  	letterinWord = true;
			}

		}

		if (letterinWord){
			for (var i = 0; i < chosenWordBlanked.length; i++) {
				if(currentWordSplit[i] === user.guess){
					chosenWordBlanked[i] = user.guess
				}
			}
			console.log(`\n${user.guess} is in the word!\n`)
			console.log(chosenWordBlanked.join(""));
			letterinWord = false;
			if(chosenWordBlanked.join("") === chosenWord){
				win = true;
				inquirer.prompt([
				{
					type: "confirm",
					name: "winAgain",
					message: "You won! Would you like to play again?"

				}
				]).then(function(answer){
					if(answer.winAgain){
						chooseWord();
						guess();
					}
					else{
						return console.log("\nThanks for playing!\n");
					}
				})
			}
			if (!win && !lose){
				guess();
			}
		}

		else {


		    if(wrongGuesses.indexOf(user.guess) < 0){
		    	console.log(`\nSorry. ${user.guess} is not in this word.\n`);
		    	wrongGuesses.push(user.guess);
		    	guessesLeft--;
		    }
		    else{
		    	console.log(`\nYou already guessed ${user.guess}!\n`);
		    }


		    if (guessesLeft > 0 && !win && !lose){
		    	guess();
			}
			else {
				console.log("\nYou lose.\n")
				lose = true;
				inquirer.prompt([
				{
					type: "confirm",
					name: "loseAgain",
					message: "You lost! Would you like to play again?"

				}
				]).then(function(answer){
					if(answer.loseAgain){
						chooseWord();
						guess();
					}
					else{
						return console.log("\nThanks for playing!\n");
					}
				})

			}
			    


	  	}
	  
	});
}


guess();
