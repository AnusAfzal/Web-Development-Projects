// ================================
// Simon Says Game
// ================================


// Stores the game's random sequence
let gameSeq = [];

// Stores the user's clicked sequence
let userSeq = [];


// Array containing all button colors
let btns = ['red', 'green', 'yellow', 'purple'];


// Checks whether the game has started or not
let start = false;

// Stores current level
let level = 0;

// Store highest Score
let highestScore = 0;

// Selects the h2 heading
let h2 = document.querySelector("h2");


// =====================================
// Start Game on Key Press
// =====================================

document.addEventListener('keypress', function () {

    // Game starts only once
    if (start == false) {

        console.log("Game has Started");

        start = true;

        // Starts first level
        levelUp();
    }
});


// =====================================
// Flash Effect for Game Sequence
// =====================================

function gameFlash(btn) {

    // Adds white flash class
    btn.classList.add("flash");

    // Removes flash after 250ms
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


// =====================================
// Flash Effect for User Click
// =====================================

function userFlash(btn) {

    // Adds user flash effect
    btn.classList.add("userFlash");

    // Removes effect after 250ms
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


// =====================================
// Generates Next Level
// =====================================

function levelUp() {

    // Clears old user sequence for new level
    userSeq = [];

    // Increase level
    level++;

    // Updates level text on screen
    h2.innerText = `level: ${level}. Highest score: ${highestScore}`;


    // Generates random index
    let randIdx = Math.floor(Math.random() * btns.length);

    // Gets random color from array
    let randColor = btns[randIdx];

    // Selects corresponding button
    let randBtn = document.querySelector(`.${randColor}`);


    // Adds color to game sequence
    gameSeq.push(randColor);

    // Flashes selected button
    gameFlash(randBtn);
}


// =====================================
// Checks User Input
// =====================================

function checkUserColor(idx) {

    // Checks current clicked color
    if (userSeq[idx] === gameSeq[idx]) {

        // If user completed full sequence
        if (userSeq.length == gameSeq.length) {

            // Move to next level after 1 second
            setTimeout(levelUp, 1000);
        }

    } else {

        if (level > highestScore)
            highestScore = level;

        // Game Over Message
        h2.innerHTML = `Game Over. Your Score was <b>${level}</b>.<br>Highest Score: ${highestScore}.<br>Press any key to start`;

        // Flashes red background
        document.querySelector("body").style.backgroundColor = "red";

        // Restores background color
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        // Resets game
        reset();


    }
}


// =====================================
// Handles User Button Click
// =====================================

function btnPress() {

    // Stores clicked button
    let btn = this;

    // User click flash effect
    userFlash(btn);

    // Gets button id (color)
    let userColor = btn.getAttribute("id");

    // Adds user color to sequence
    userSeq.push(userColor);

    // Checks user's answer
    checkUserColor(userSeq.length - 1);
}


// =====================================
// Adds Click Events to All Buttons
// =====================================

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {

    btn.addEventListener('click', btnPress);
}


// =====================================
// Resets Game Variables
// =====================================

function reset() {

    start = false;

    userSeq = [];

    gameSeq = [];

    level = 0;
}