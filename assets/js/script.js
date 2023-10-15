

document.querySelectorAll("button").forEach((button) => {

    button.addEventListener("click", () => {

        const userChoice = button.id;

        const computerChoice = computerChoose();

        const result = checkWinner(userChoice, computerChoice);

        displayResult(userChoice, computerChoice, result);

    });

});
/* This function is for the computer to make a choice.
 From a random index a hole number is going to be choosen. 
 Then it's going to be multiplied with 5 scince there are 5 different options.*/

 function computerChoose() {

    const randomIndex = Math.floor(Math.random() * 5);

    return options[randomIndex];

}
/* This function is to check who the winner is.
 If user choice is rock and the computer choice is scissors or lizard, 
 there is going to bo be a messege: You win!. 
 If the computer choice isn't either of theese 2, there is a else message: You lose!.*/

function checkWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {

        return "It's a tie!";

    }
// Game rules
    if (

        (userChoice === "ROCK" && (computerChoice === "SCISSORS" || computerChoice === "LIZARD")) ||

        (userChoice === "PAPER" && (computerChoice === "ROCK" || computerChoice === "SPOCK")) ||

        (userChoice === "SCISSORS" && (computerChoice === "PAPER" || computerChoice === "LIZARD")) ||

        (userChoice === "LIZARD" && (computerChoice === "SPOCK" || computerChoice === "PAPER")) ||

        (userChoice === "SPOCK" && (computerChoice === "SCISSORS" || computerChoice === "ROCK"))

    ) {

        return "YOU WIN HOOOOORAY!:D";

    } else {

        return "You lose! :'(";

    }

}

