$(document).ready(function () {
    // Starts Game with Random Number
    var random = Math.floor((Math.random() * 101) + 19);
    $("#randomNumber").text(random);

    // Sets beginning numbers to 0
    var wins = 0;
    var losses = 0;
    var total = 0;

    // Sets each crystal with a random number
    var blueCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
    var greenCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
    var redCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
    var purpleCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);

    // Reset the Game!
    function resetTheGame() {
        random = Math.floor((Math.random() * 101) + 19);
        $("#randomNumber").text(random);
        blueCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
        greenCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
        redCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
        purpleCrystalRandomNumber = Math.floor((Math.random() * 11) + 1);
        total = 0;
        $("#total").text(total);
    }

    // Adds points to the "WINS" Score
    function youWin() {
        alert("You win!");
        wins = wins + 1;
        $("#numberOfWins").text(wins);
        resetTheGame();
    }

    // Adds points to the "losses" Score
    function youLose() {
        alert("You lose!");
        losses = losses + 1;
        $("#numberOfLosses").text(losses);
        resetTheGame()
    }

    // Win / Lose Conditions Function
    function winLoseCondition() {
        if (total === random) {
            youWin();
        } else if (total > random) {
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
        $("#total").text(total);
        winLoseCondition();
    });

    // Green Crystal
    $("#greenCrystal").on("click", function () {
        total = total + greenCrystalRandomNumber;
        $("#total").text(total);
        winLoseCondition();
    });

    // Red Crystal
    $("#redCrystal").on("click", function () {
        total = total + redCrystalRandomNumber;
        $("#total").text(total);
        winLoseCondition();
    });

    // Purple Crystal
    $("#purpleCrystal").on("click", function () {
        total = total + purpleCrystalRandomNumber;
        $("#total").text(total);
        winLoseCondition();
    });

}); 