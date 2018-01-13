var wordsList = [];


function WordObj(word){
	this.word = word;
	this.length = word.length;
	this.addToList = function(){
		wordsList.push(this.word);
	};
}

module.exports = {WordObj: WordObj,
	wordsList: wordsList}