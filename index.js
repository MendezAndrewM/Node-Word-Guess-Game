const Word = require("./Word");
const inquirer = require("inquirer");

const wrdArray = ["cheeseburger", "hotdog", "chiropractor", "lasagna"];

function play() {
    // Randomly pick word from the wrdArray
    const theWord = new Word(wrdArray[Math.floor(Math.random() *5)]);
    // initiate Letter() constructor
    theWord.create();
    
    inquirer.prompt([
        {
            type: "confirm",
            name: "Playgame",
            message: "Are you Ready to Guess the Word?"
        }
    ]).then(function(confirm) {

        if (confirm.Playgame = false) {
            console.log("Bye!");
            break;
        }
        else {
            round();
            
        }


        function round() {
            console.log("Guess The Word!")
            theWord.show()
        }
    })

}

play();