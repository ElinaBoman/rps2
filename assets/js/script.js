// Constant variables
const form = document.getElementById("login-form");
const usernameSection = document.getElementById("enter-username-section");
// const username = document.getElementsByClassName("user-name");
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
//Add hide function to section.
usernameSection.classList.remove("hide");
gameRulesSection.classList.add("hide");
gameAreaSection.classList.add("hide");

/*FÖR ATT GÖRA HIDE FUNKTIONEN ENKLARE.
function showPanel (panel) {
    panel.classList.remove("show");
}
function hidePanel (panel) {
    panel.classList.remove("hide")
}
*/
/*
showPanel(usernameSection);
hidePanel(gameRulesSection);
hidePanel(gameAreaSection);*/

/*document.querySelectorAll("button").forEach((button) => {
//button.addEventListener("click", () => {
    //const userChoice = button.id;
    //const computerChoice = computerChoice();
    //const result = checkWinner(userChoice, computerChoice);
    //displayResult(userChoice, computerChoice, result);
// });
});*/

// Homebutton
homeButton.addEventListener("click", function () {
    window.location.href = homeUrl;
});
// This section will remove the rulearea-section and then show gamearea-section.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const enterUsername = username.value.trim();
    //let errorMsg = document.getElementById("error");
    if (enterUsername === "") {
        enterUserName.innerText = `Please be creative, insert username!`;
        enterUserName.style.color = "red";
        enterUserName.style.fontSize = "100%";
    } else {
        gameRulesSection.classList.remove("hide");
        usernameSection.classList.add("hide");
    }
});
gameRulesSection.addEventListener("click", function (event) {
    event.preventDefault();
    gameRulesSection.classList.add("hide");
    gameAreaSection.classList.remove("hide");
});

/* This function is to check who the winner is.
 If user choice is rock and the computer choice is scissors or lizard,
 there is going to bo be a messege: You win!.
 If the computer choice isn't either of theese 2, there is a else message: You lose!.*/
const options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = computerChoose();
        const result = determineWinner(userChoice, computerChoice);
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
    console.log(playerImage);
    console.log(userChoice);
    console.log(computerChoice);
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