// Constant variables
const form = document.getElementById("login-form");
const usernameSection = document.getElementById("enter-username-section");
const username = document.getElementById("username-input");
const usernameSubmitBtn = document.getElementsByClassName("submit-username-btn");
const gameRulesSection = document.getElementById("game-rules-section");
const gameAreaSection = document.getElementById("game-area");
const playerButton = document.getElementById("playerButton");
const startGame = document.getElementsByClassName("game-rules-btn");
const playerImage = document.getElementById("player-img");
const computerImage = document.getElementById("computer-img");
const homeUrl = 'https://8000-elinaboman-rps2-2udw505m6g.us2.codeanyapp.com/';
const homeButton = document.getElementById("home-button");
const resetScore = document.getElementById("reset-score");
const errorElement = document.getElementById("error");
const enterUserName = document.getElementById("gamer-tag-info");
const computerScore = document.getElementById("computer-score");
const gameButtons = document.getElementById("player-button").children;
const options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];




//Add hide function to section.
usernameSection.classList.remove("hide");
gameRulesSection.classList.add("hide");
gameAreaSection.classList.add("hide");

// Homebutton
homeButton.addEventListener("click", function () {
    window.location.href = homeUrl;
});
// This section will remove the rulearea-section and then show gamearea-section.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const enterUsername = username.value.trim();
    if (enterUsername === "") {
        enterUserName.innerText = `Please be creative, insert username!`;
        enterUserName.style.color = "red";
        enterUserName.style.fontSize = "130%";
    } else {
        gameRulesSection.classList.remove("hide");
        usernameSection.classList.add("hide");
        let p1 = username.value;
        document.getElementById("p-scores").innerText = `${p1}:`;
        document.getElementById("welcome-name").innerText = `Hello ${p1}!`;
    }

});
gameRulesSection.addEventListener("click", function (event) {
    event.preventDefault();
    gameRulesSection.classList.add("hide");
    gameAreaSection.classList.remove("hide");
});
let userTries = [0];
let maxTries = [11];
/* Winner check function*/
for (button of gameButtons) {
    const userChoice = button.id;
    button.addEventListener("click", function () {
        userTries++;
        if (userTries < maxTries) {
            const computerChoice = computerChoose();
            const result = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, result);
        } else if
            (userChoise > computerChoice) {
            alert(`You WIN!`);
            userTries = [0];
        } else if (incrementScore === incrementWrongAnswer) {
            alert(`It's a tie!`);
            userTries = [0];
        } else {
            alert(`You Lose!`);
            userTries = [0];
        }
    });

};
/*Computer choice function created with ChatGPT */
function computerChoose() {
    const randomIndex = Math.floor(Math.random() * 5);
    return options[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
    let isCorrect = (
        (userChoice === "ROCK" && (computerChoice === "SCISSORS" || computerChoice === "LIZARD")) ||
        (userChoice === "PAPER" && (computerChoice === "ROCK" || computerChoice === "SPOCK")) ||
        (userChoice === "SCISSORS" && (computerChoice === "PAPER" || computerChoice === "LIZARD")) ||
        (userChoice === "LIZARD" && (computerChoice === "SPOCK" || computerChoice === "PAPER")) ||
        (userChoice === "SPOCK" && (computerChoice === "SCISSORS" || computerChoice === "ROCK"))
    );
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    // This adds score to player if isCorrect function is started.
    else if (isCorrect) {
        incrementScore();
        return "YOU WIN HOOOOORAY!";
    }
    //This adds score to computer is the earlier statements arn't fired.
    else if (!(isCorrect || userChoice === computerChoice)) {
        incrementWrongAnswer();
        return "You lose!";
    }
}
//This shows playsers choice and computer choice.
function displayResult(userChoice, computerChoice, result) {
    const resultElement = document.getElementById("result");

    resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`;
    let playerChoiceLowerCase = userChoice.toLowerCase();
    let computerChoiceLowerCase = computerChoice.toLowerCase();
    playerImage.src = `assets/images/${playerChoiceLowerCase}.png`;
    computerImage.src = `assets/images/${computerChoiceLowerCase}.png`;
};
// Theese are the functions to increment score.
function incrementScore() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}
function incrementWrongAnswer() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}
resetScore.addEventListener("click", () => {
    document.getElementById("player-score").innerText = "0";
    document.getElementById("computer-score").innerText = "0";
});