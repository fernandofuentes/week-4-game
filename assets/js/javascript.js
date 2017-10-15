$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19);
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $("#randomNumber").text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    var blueCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
    var greenCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
    var redCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
    var purpleCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    //

    var wins = 0;
    var losses = 0;
    var total = 0;



    // Reset the Game!
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random);
        $("#randomNumber").text(Random);
        blueCrystalRandomNumber = Math.floor(Math.random() * 11 + 1);
        greenCrystalRandomNumber = Math.floor(Math.random() * 11 + 1);
        redCrystalRandomNumber = Math.floor(Math.random() * 11 + 1);
        purpleCrystalRandomNumber = Math.floor(Math.random() * 11 + 1);
        total = 0;
        $("#finalTotal").text(total);
    }

    // Adds points to the "WINS" Score
    function youWin() {
        alert("You won!");
        wins = wins + 1;
        $("#numberOfWins").text(wins);
        reset();
    }

    // Adds points to the "losses" Score
    function youLose() {
        alert("You lose!");
        losses = losses + 1;
        $("#numberOfLosses").text(losses);
        reset()
    }


    // Win / Lose Conditions Function
    function winLoseCondition() {
        if (total === Random) {
            youWin();
        }
        else if (total > Random) {
            youLose();
        }
    }

    // Wins and Losses, Points
    $("#numberOfWins").text(wins);
    $("#numberOfLosses").text(losses);

    // Controls the Crystals

    // Blue Crystal
    $("#blueCrystal").on("click", function () {
        total = total + blueCrystalRandomNumber;
        console.log("New total= " + total);
        $("#finalTotal").text(total);
        winLoseCondition();
    });

    // Green Crystal
    $("#greenCrystal").on("click", function () {
        total = total + greenCrystalRandomNumber;
        console.log("New total= " + total);
        $("#finalTotal").text(total);
        winLoseCondition();
    });

    // Red Crystal
    $("#redCrystal").on("click", function () {
        total = total + redCrystalRandomNumber;
        console.log("New total= " + total);
        $("#finalTotal").text(total);
        winLoseCondition();
    });

    // Purple Crystal
    $("#purpleCrystal").on("click", function () {
        total = total + purpleCrystalRandomNumber;
        console.log("New total= " + total);
        $("#finalTotal").text(total);
        winLoseCondition();
    });

}); 