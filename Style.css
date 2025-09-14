let gameSeq = [];
let userSeq = [];
let btns = ["orange", "red", "blue", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let startBtn = document.querySelector("#startBtn");

// Start game with button click
startBtn.addEventListener("click", function() {
    if (!started) {
        startGame();
    }
});

// Start game with keypress (existing functionality)
document.addEventListener("keypress", function () {
    if (!started) {
        startGame();
    }
});

function startGame() {
    console.log("Game is Started");
    started = true;
    startBtn.style.display = "none"; // Hide start button
    levelup();
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randBtn);
}

function chckAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press Start Button to Play Again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    if (!started) return; // Prevent clicks when game not started
    
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    chckAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    startBtn.style.display = "block"; // Show start button again
}
