// =========================
// DOM ELEMENTS
// =========================
let body = document.querySelector("body");
let p = document.querySelector("#passage");
let timePara = document.querySelector("#time-p");
let inp = document.querySelector("input");

let div = document.createElement("div");
div.style.display = "flex";
div.style.alignItems = "center";
div.style.justifyContent = "center";

let btn = document.createElement("button");
btn.innerText = "Restart";
btn.style.height = "50px";
btn.style.width = "125px";
btn.style.backgroundColor = "#bfc0c0"
btn.style.color = "#2d3142";
btn.style.fontSize = "25px";
btn.style.fontWeight = "bold";
btn.style.border = "none";
btn.style.marginTop = "20px";

div.appendChild(btn);

// =========================
// STATE VARIABLES
// =========================
let timer = null;
let timeLeft = 30;
const TEST_TIME = 30;

let timeStarted = false;
let wpm = 0;
let acc = 0;

// =========================
// PASSAGE DATA
// =========================
let passage = [
    "The quick brown fox jumps over the lazy dog.",
    "Learning to code takes time and consistent practice every day. Small progress adds up over time.",
    "JavaScript is used to create interactive websites and dynamic web applications.",
    "Good typing speed comes from accuracy first and speed later. Focus on making fewer mistakes.",
    "Practice is the key to mastering any skill, including programming and typing.",
    "A computer program is a set of instructions that tells the computer what to do step by step.",
    "Web development includes HTML for structure, CSS for design, and JavaScript for functionality.",
    "Staying focused while typing helps improve both speed and accuracy significantly.",
    "Debugging is the process of finding and fixing errors in your code.",
    "Consistency in practice leads to steady improvement in typing speed and confidence."
];

// Generate and display initial passage
let passageGenerated = generatePassage();
p.innerHTML = passageGenerated;

// =========================
// RESTART BUTTON LOGIC
// =========================
btn.addEventListener("click", () => {
    clearInterval(timer);

    // Reset state
    timeLeft = TEST_TIME;
    timeStarted = false;
    wpm = 0;
    acc = 0;

    // Reset input
    inp.value = "";

    // Generate new passage
    passageGenerated = generatePassage();
    p.innerHTML = passageGenerated;

    // Reset UI
    timePara.innerHTML = `Time: ${TEST_TIME} sec`;

    document.querySelector(".ACC").innerHTML = "Accuracy:";
    document.querySelector(".WPM").innerHTML = "Words Per Minute:";
});

// =========================
// INPUT LISTENER (START TIMER)
// =========================
inp.addEventListener("input", () => {
    // Start timer only once
    if (timeStarted) return;

    timeStarted = true;

    timer = setInterval(() => {
        timeLeft--;

        // When time finishes
        if (timeLeft === 0) {
            clearInterval(timer);

            checkPassage();

            inp.value = "";

            document.querySelector(".WPM").innerHTML =
                `Words Per Minute: ${wpm}`;

            document.querySelector(".ACC").innerHTML =
                `Accuracy: ${acc}%`;

            body.append(div);

            timePara.innerHTML = "Time's up!";
            return;
        }

        // Update timer UI
        timePara.innerHTML = `Time: ${timeLeft} sec`;
    }, 1000);
});

// =========================
// PASSAGE CHECKING LOGIC
// =========================
function checkPassage() {
    let correctChars = 0;
    let incorrectChars = 0;

    for (let i = 0; i < inp.value.length; i++) {

        if (inp.value[i] === passageGenerated[i]) {
            correctChars++;
        } else {
            incorrectChars++;
        }
    }

    // Calculate results
    wpm = calcWPM(correctChars + incorrectChars, TEST_TIME / 60);
    acc = accuracy(correctChars, correctChars + incorrectChars);
}

// =========================
// WPM CALCULATION
// Formula: (chars / 5) / minutes
// =========================
function calcWPM(totCharTyped, timeInMin) {
    if (totCharTyped === 0) return 0;

    let wpm = (totCharTyped / 5) / timeInMin;

    console.log(`WPM: ${wpm}`);
    return wpm;
}

// =========================
// ACCURACY CALCULATION
// Formula: (correct / total) * 100
// =========================
function accuracy(correctChars, totCharTyped) {
    if (totCharTyped === 0) return 0;

    acc = (correctChars / totCharTyped) * 100;
    acc = acc.toFixed(2);

    console.log(`Accuracy: ${acc}%`);
    return acc;
}

// =========================
// PASSAGE GENERATOR
// =========================
function generatePassage() {
    let rand = Math.floor(Math.random() * passage.length);

    console.log(passage[rand]);
    return passage[rand];
}