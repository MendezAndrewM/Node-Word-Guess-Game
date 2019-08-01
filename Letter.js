function Letter(l) {
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

export default Letter;