// Const Variables
// Constant Variables that store elements from the DOM
const startBtn = document.getElementById("start-btn");
const usernameForm = document.getElementById("username-form");
const usernameInput = document.getElementById("username");
const welcomeSection = document.getElementById("welcome-game-area");
const difficultySection = document.getElementById("difficulty-game-area");
const questionsSection = document.getElementById("questions-game-area");
const finishedSection = document.getElementById("finished-game-area");
const rulesSection = document.getElementById("game-rules-section");
const easyButton = document.getElementById("easy-btn");
const mediumButton = document.getElementById("medium-btn");
const hardButton = document.getElementById("hard-btn");
const nextQuestionButton = document.getElementById("next-question");
const toDiffbutton = document.getElementById("to-diff-button");
const answer1 = document.getElementById("alternative-1");
const answer2 = document.getElementById("alternative-2");
const answer3 = document.getElementById("alternative-3");
const answer4 = document.getElementById("alternative-4");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementsByClassName("alternatives");
const playAgainButton = document.getElementById("play-again-button");
const finishedScoreText = document.getElementById("finished-score-text");
const timeLeftText = document.getElementById("actual-time-left");
const enterUsername = document.getElementById("gamer-tag-info");
const statusLevel = document.getElementById("status-level");
const hourglass = document.getElementById("time-left");
const difficulty = {
    easy: "easy",
    medium: "medium",
    hard: "hard"
};

// Let variables that can be reassigned
let currentQuestionIndex; // Keeps track of the index of the current question being asked
let shuffledQuestions; // Stores the questions in a shuffled order
let isDisabled = false; // Used to disable answer buttons
let questionsAnswered = 0; // Keeps track of the number of questions answered
let oldScore = 0; // Stores the score from previous questions
let timeLeft = 15; // Stores the remaining time for answering a question
let timer; // Used to track the countdown timer


// When the page is loaded, the username input has focus and the user can start to type in their username without having to click in the input box.
document.getElementById("username").focus();

// When the page is loaded, adds the hide class to all sections and removes it, if there is one, on the welcome section.
difficultySection.classList.add("hide");
questionsSection.classList.add("hide");
finishedSection.classList.add("hide");
rulesSection.classList.add("hide");
welcomeSection.classList.remove("hide");

// Eventlisteners
// When the user clicks an answer, it checks what button was clicked and uses that information in the checkAnswer function
answer1.addEventListener("click", () => checkAnswer("a"));
answer2.addEventListener("click", () => checkAnswer("b"));
answer3.addEventListener("click", () => checkAnswer("c"));
answer4.addEventListener("click", () => checkAnswer("d"));

// Listens for a submit event on the username form, but does not perform any action
usernameForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

// Listens for a click on the "To Difficulty" button, and removes the hide element from the difficulty section and adds it to the rules section.
toDiffbutton.addEventListener("click", function (event) {
    event.preventDefault();

    difficultySection.classList.remove("hide");
    rulesSection.classList.add("hide");
});

// Event listeners for the difficulties
easyButton.addEventListener("click", function () {
    runGame(difficulty.easy);
});
mediumButton.addEventListener("click", function () {
    runGame(difficulty.medium);
});
hardButton.addEventListener("click", function () {
    runGame(difficulty.hard);
});

// Next question button event listener
nextQuestionButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Functions

// Timer functions
/**
 * Starts the timer with 15seconds on the clock. If there is less than 5seconds remaining the
 * color of the timer gets Red, otherwise it's white.
 */
function startTimer() {
    timeLeft = 15;
    timer = setInterval(function () {
        countdown();
        timeLeftText.innerText = timeLeft;
        if (timeLeft < 6) {
            hourglass.style.color = "red";
        } else {
            hourglass.style.color = "white";
        }
    }, 1000);
}

/**
 * Checks if the timer has reached 0, if not, decrements the remaining time by 1.
 */
function countdown() {
    if (timeLeft === 0) {
        stopTimer();
        checkAnswer();
    } else {
        timeLeft -= 1;
    }
}

/**
 * Stops the timer when the stopTimer is called
 */
function stopTimer() {
    clearInterval(timer);
}

/**
 * Listens after a click from the user on the start button, checks so the username is not empty,
 * then removes the hide element from the difficulty 
 * section and adds it to the welcome section
 */
startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let username = usernameInput.value.trim();
    if (username === "") {
        enterUsername.innerText = `Gamer tag can't be empty, please choose a Gamer tag and try again!`;
        enterUsername.style.color = "red";
        enterUsername.style.fontSize = "150%";
        return;
    } else {
        // If the username is not empty, remove the hide class from the difficulty section
        welcomeSection.classList.add("hide");
        rulesSection.classList.remove("hide");
        localStorage.setItem("username", username);
    }
});

// Game Section

/**
 * When the user clicks the Play Again button, it hides the finished section and displays the difficulties section.
 * it also resets the questionsanswered to 0, and the oldScore to 0.
 */
playAgainButton.addEventListener("click", function () {
    finishedSection.classList.add("hide");
    difficultySection.classList.remove("hide");
    questionsAnswered = 0;
    oldScore = 0;
    document.getElementById("correct-score-amount").innerText = 0;
});

/**
 * Runs the game with the specified difficulty. Randomly sorts the questions and initializes
 * the currentQuestionIndex to 0.
 */
function runGame(difficulty) {
    if (difficulty === "easy") {
        shuffledQuestions = easyQuestions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    } else if (difficulty === "medium") {
        shuffledQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    } else if (difficulty === "hard") {
        shuffledQuestions = hardQuestions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }
    difficultySection.classList.add("hide");
    questionsSection.classList.remove("hide");

    // Calls setNextQuestions function
    setNextQuestion();
}

/**
 * When you click the nextquestionbutton it starts the timer, it disables the answers.
 * It also calls the resetQuiz function.
 */
function setNextQuestion() {
    startTimer();
    isDisabled = false;
    resetQuiz();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].removeAttribute("disabled");
        }
    }
}

/**
 * Shows the question and the alternatives in the correct buttons
 * also stores the data answer for each button.
*/
function showQuestion(questions) {
    questionText.innerHTML = questions.question;
    answer1.innerHTML = questions.a;
    answer1.setAttribute("data-answer", "a");
    answer2.innerHTML = questions.b;
    answer2.setAttribute("data-answer", "b");
    answer3.innerHTML = questions.c;
    answer3.setAttribute("data-answer", "c");
    answer4.innerHTML = questions.d;
    answer4.setAttribute("data-answer", "d");
}

/**
 * Checks if the user clicked the correct answer and then disables the buttons so they cannot change answer.
 * Then shows the next question button and depending on if the user got it right, increases the correct
 * answers counter. Depending on how many correct answers the user gets, it displays different text for the user.
 */
function checkAnswer(answer) {
    if (isDisabled) {
        return;
    }
    isDisabled = true;
    const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeAttribute("disabled");
        if (answerButtons[i].getAttribute("data-answer") === correctAnswer) {
            answerButtons[i].classList.add("correct-answer");
            if (answer === correctAnswer) {
                incrementScore();
            } // If the users answer was not correct:
        } else {
            answerButtons[i].classList.add("wrong-answer");
        }
    }
    nextQuestionButton.classList.remove("hide");

    questionsAnswered += 1;
    if (questionsAnswered === 10) {
        const username = localStorage.getItem('username');
        questionsSection.classList.add("hide");
        finishedSection.classList.remove("hide");
        if (oldScore === shuffledQuestions.length) {
            statusLevel.innerText = `Awesome ${username}! You received Headmaster status!`;
            finishedScoreText.innerText = `You got ${oldScore} out of ${shuffledQuestions.length} correct answers!`;
        } else if (oldScore >= 5 && oldScore <= 9) {
            statusLevel.innerText = `Well done ${username}! You recieved N.E.W.T status!`;
            finishedScoreText.innerText = `You got ${oldScore} out of ${shuffledQuestions.length} correct answers!`;
        } else if (oldScore >= 1 && oldScore <= 4) {
            statusLevel.innerText = `Back to school ${username}. You seem like a 3rd year to me`;
            finishedScoreText.innerText = `You got ${oldScore} out of ${shuffledQuestions.length} correct answers!`;
        } else if (oldScore === 0) {
            statusLevel.innerText = `Well...${username}, Not much to say "first year".`;
            finishedScoreText.innerText = `You got ${oldScore} out of ${shuffledQuestions.length} correct answers!`;
        }
    }
    stopTimer();
}

/**
 * Get the current score from the dom and increment it by 1
 */
function incrementScore() {
    oldScore = parseInt(document.getElementById("correct-score-amount").innerText);
    document.getElementById("correct-score-amount").innerText = ++oldScore;
}

/**
 * Resets the quiz, adds the Hide element to the next button and
 * removes the classes to the buttons for the next question.
 */
function resetQuiz() {
    nextQuestionButton.classList.add("hide");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("correct-answer", "wrong-answer");
    }
}
