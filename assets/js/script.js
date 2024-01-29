// Constant variables
const form = document.getElementById("login-form");
const usernameSection = document.getElementById("enter-username-section");
const username = document.getElementById("username-input");
const gameRulesSection = document.getElementById("game-rules-section");
const gameAreaSection = document.getElementById("game-area");
const playerImage = document.getElementById("player-img");
const computerImage = document.getElementById("computer-img");
const homeButton = document.getElementById("home-button");
const resetScore = document.getElementById("reset-score");
const enterUserName = document.getElementById("gamer-tag-info");
const gameButtons = document.getElementById("player-button").children;
const options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];


//Event Listeners

gameRulesSection.addEventListener("click", function (event) {
    event.preventDefault();
    gameRulesSection.classList.add("hide");
    gameAreaSection.classList.remove("hide");
});

/** Home button
homeButton.addEventListener("click", function () {
window.location.href = "../../index.html";
console.log(window.location.href)
});
*/
/**
 * This EventListener will reset the score when Reset score button is clicked.
 * (player-score) will have the innetext of 0.
 * (computer-score) will have the innertext 0.
 */
resetScore.addEventListener("click", () => {
    document.getElementById("player-score").innerText = "0";
    document.getElementById("computer-score").innerText = "0";
});

/**
 * This block of code will run when the user opens the login form.
 * It will hide sections of Rules and Game.
 * The username section will show.
 */
usernameSection.classList.remove("hide");
gameRulesSection.classList.add("hide");
gameAreaSection.classList.add("hide");

/**
 * This code will let the user know that there has to be text in the text-input.
 * If the text box is an empty string the innerText will read a message to enter username.
 * If there is a text input the else code block will run and the hide class will remove 
 * from Rule area and be applied to enter username form. 
 * p1 is the input text that will be enterd in the game. 
 */
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

//This is to limit number of tries before game ends.
let userTries = 0;
let maxTries = 11;

/**
 * UserTries has to be less then maxTries. 
 * If userTries is less then maxTries the if code block will run. 
 * If UserTries = maxTries the else code block will run and alert
 *  the user to check score and reset game.
 */
for (var button of gameButtons) {
    const userChoice = button.id;
    button.addEventListener("click", function () {
        userTries++;
        if (userTries < maxTries) {
            const computerChoice = computerChoose();
            const result = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, result);
        } else {
            window.alert(`Game over! Check result! If you want to play again, hit the reset button!`);
            userTries = 0;
        }
    });
}

/**
 * Computer choice function inspired by ChatGPT ChatGPT wrote Math.floor(math.random()).
 * This code will make the computer choice random. There are 5 different options to choose from.
 */
function computerChoose() {
    const randomIndex = Math.floor(Math.random() * 5);
    return options[randomIndex];
}

/**
 * determineWinner compares user and computer choice to determine winner.
 * @param userChoice refers to the users choice of button in the game.
 * @param computerChoice this displays the computers choice that comes from the computerChoose function.
 * @returns will display message in game with result.
 * DetermineWinner function was inspired by chatGPT suggestion on using logical AND (&&) and OR (||). 
 */
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
    } else if (isCorrect) {
        incrementScore();
        return "YOU WIN HOOOOORAY!";
    } else if (!(isCorrect || userChoice === computerChoice)) {
        incrementWrongAnswer();
        return "You lose!";
    }
}

/**
 * @param userChoice refers to the users choice of button in the game.
 * @param computerChoice this displays the computers choice that comes from the computerChoose function.
 * @param  result will display message in game with result.
 * This will send the result from the game and claim the winner of each round.
 * @param computerChoiseLowerCase will change the computerChoise to lower case so images can be paired with the button.
 * @param playerImage will set the backround in the user div.
 * @param computerImage will set the background in the computer div.
*/
function displayResult(userChoice, computerChoice, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`;
    let playerChoiceLowerCase = userChoice.toLowerCase();
    let computerChoiceLowerCase = computerChoice.toLowerCase();
    playerImage.src = `assets/images/${playerChoiceLowerCase}.png`;
    computerImage.src = `assets/images/${computerChoiceLowerCase}.png`;
}

/**
 * This function increments score.
*/
function incrementScore() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

/**
 * This function increments computers score everytime the answer is not isCorrect,
 */
function incrementWrongAnswer() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}