alert("hi")

//1. User starts by clicking a letter from the keyboard. 
//2. The letter shows up on the screen. 
//3. The computer chooses a letter. 
//4. If the computer and user match, the user wins. 
//5. If the computer and user do not match, the user loses. 
//6. The user has 9 tries to correctly match the computer.

var wins = 0,
    loss = 0,
    guessLeft = 9,
    guessedSoFar = 0;



document.onkeyup = function (event) {
    var userGuess = event.key;

    var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

    //a simple way to look at the above function: 
    //var computerGuess = letterChoices[]




}
