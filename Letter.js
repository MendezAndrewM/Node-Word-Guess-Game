const Letter = function(l) {
    this.letter = l,
    this.found = false,
    this.display = "_",
    this.check = function(guess) {
        if (guess == l) {
            this.found = true;
            this.display = l
        }
    }
}

module.exports = Letter;
