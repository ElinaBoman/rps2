
     // Constant variables
    const loginForm = document.getElementById("login-form");
    const usernameSection = document.getElementById("enter-username-section");
    const usernameInput = document.getElementsByClassName("user-name");
    const usernameSubmitBtn = document.getElementsByClassName("submit-username-btn");
    const gameRulesSection = document.getElementById("game-rules-section");
    const gameAreaSection = document.getElementById("game-area");
    const playerButton = document.getElementById("playerButton");
    const startGame = document.getElementsByClassName("game-rules-btn")
    
    const homeUrl = 'https://8000-elinaboman-rps2-2udw505m6g.us2.codeanyapp.com/';
    const homeButton = document.getElementById("home-button");
   

   
    
    // Homebutton
    homeButton.addEventListener("click", function () {
        window.location.href = homeUrl;
    }); 
    // Add hide function to section.
        usernameSection.classList.remove("hide");
        gameRulesSection.classList.add("hide");
        gameAreaSection.classList.add("hide");
    // Listens for form, performs no action.
        loginForm.addEventListener("click", function (event) {
        event.preventDefault();

     (usernameInput == "")
        usernameSection.classList.add("hide");
        gameRulesSection.classList.remove("hide");


});

//Rule section
    gameRulesSection.addEventListener("click", function (event) {
    event.preventDefault();
    gameRulesSection.classList.add("hide");
    gameAreaSection.classList.remove("hide");



});

const options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

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
    
        // Game rules

        let isCorrect = (

            (userChoice === "ROCK" && (computerChoice === "SCISSORS" || computerChoice === "LIZARD")) ||

            (userChoice === "PAPER" && (computerChoice === "ROCK" || computerChoice === "SPOCK")) ||

            (userChoice === "SCISSORS" && (computerChoice === "PAPER" || computerChoice === "LIZARD")) ||

            (userChoice === "LIZARD" && (computerChoice === "SPOCK" || computerChoice === "PAPER")) ||

            ( userChoice === "SPOCK" && (computerChoice === "SCISSORS" || computerChoice === "ROCK"))

        )
        if (userChoice === computerChoice) {
            
            return "It's a tie!";
          
        }
       // This adds score to player if isCorrect function is started.
        else if (isCorrect) {
        incrementScore(); 
        return "YOU WIN HOOOOORAY!:D";
        
        } 
        //This adds score to computer is the earlier statements arn't fired.
        else {
        incrementWrongAnswer()    
        return "You lose!";
        
        }

    }

    function displayResult(userChoice, computerChoice, result) {

        const resultElement = document.getElementById("result");

        resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`;
    }

     function incrementScore() {
     let playerScore = parseInt(document.getElementById("player-score").innerText);
     document.getElementById("player-score").innerText = ++playerScore;
    }

    function incrementWrongAnswer() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
    }
