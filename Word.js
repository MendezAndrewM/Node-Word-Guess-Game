// import Letter from "./Letter";
const Letter = require("./Letter");

function Word(daWord) {
    this.contains = [];
    this.create = function() {
        const split = daWord.split("");
        for (let i = 0; i < split.length; i++) {
            const thisLetter = new Letter(split[i]);
            this.contains.push(thisLetter)
        }
    }
    this.show = function() {
        const dispArr = []
        for(let i = 0; i < this.contains.length; i++) {
            dispArr.push(this.contains[i].display);
        }
        console.log(dispArr.join(" "))
    }
    this.guess = function(foo) {
        for (let i = 0; i < this.contains.length; i++) {
            this.contains[i].check(foo);
        }
    }
}

// const Moose = new Word('moose');
// Moose.create();
// Moose.show();
// Moose.guess("f");
// Moose.show();
// Moose.guess("m");
// Moose.show();
// Moose.guess("o");
// Moose.show();

module.exports = Word;
