//this file doesn't require any other files, so write first
//this needs to be able to display an underscore or a letter

//need the inquirer npm package
var inquirer = require("inquirer");

//constructor function - needs to define a string and a boolean value...
const Letter = function(character) {
    this.character = character;    //string value
    this.letterGuessed = false;    //boolean

    //define a function that returns underlying character if correct letter is guessed, or underscore if not.
    this.print = function(guess){
        if (guess === this.character) {
            return this.character;
        }
        else {
            return "_";
        }
    };

    //guess function - takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkGuess = function(guess){
        if (guess === this.character){
            this.letterGuessed = true;
        }
    }
};
//export letter constructor b/c word file requires it.    
module.exports = Letter;
