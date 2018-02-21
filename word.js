//this file requires the letter file only.
var Letter = require("./letter.js");

//constructor function word
//create an object representing current word attempting to guess
const Word = function(currentWord){
    this.currentWord = currentWord;

//need an array of 'new' Letter objects representing letters of underlying word
    var letters = new [];
    //need more here...................

//need a function that returns a string representing the word. 
//this should call the first function defined in letter.js
    this.stringWord = function(){
        var string = "";
        var letter = this.letters
        for (var i = 0; i < letters.length; i++){
            string += letters[i].print();
        }
        return string;
    };
    
//need another function that takes a character as an argument and calls the guess function on each letter object
//this is the second function in letter.js    


};



//export b/c index.js needs it
module.exports = Word;