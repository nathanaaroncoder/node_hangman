// var letters = require("./letters.js");

var wordsList = [];

// ["pizza", "nuggets", "burger", "hoagie", "milkshake", 
// 			"beer", "sandwich", "panini", "fries", "soda", "burrito", "taco", "salad",
// 			"hotdog", "wings", "chips", "nuts", "wine", "lasanga", "spaghetti", "hummus",
// 			"carrots", "apple", "candy", "dessert", "juice", "cake", "cookie"];

function WordObj(word){
	this.word = word;
	this.length = word.length;
	this.addToList = function(){
		wordsList.push(this.word);
	};
}

module.exports = {WordObj: WordObj,
	wordsList: wordsList}