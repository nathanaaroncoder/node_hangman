var words = require("./word.js");



var pizza = new words.WordObj("pizza");
pizza.addToList();

var burger = new words.WordObj("burger");
burger.addToList();

var fries = new words.WordObj("fries");
fries.addToList();

var beer = new words.WordObj("beer");
beer.addToList();

var iceCream = new words.WordObj("brownies");
iceCream.addToList();

var cookies = new words.WordObj("cookies");
cookies.addToList();



function LetterObj(word){
	this.word = word;
	this.letters = word.split("");
	this.blanks = this.letters.length;
	this.blanksAndSuccesses = [];
	this.createBlanks = function(){
		for (var i = 0; i < this.blanks; i++) {
			this.blanksAndSuccesses.push("-");
		}
	};

}

module.exports = {wordsList: words.wordsList,
	LetterObj: LetterObj}
