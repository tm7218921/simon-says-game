let gameSeq = [];
let userSeq = [];

let btns = ["orange", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let startBtn = document.getElementById("startBtn");

// Desktop: keypress starts game
document.addEventListener("keypress", function () {
  if (!started) {
    startGame();
  }
});

// Mobile: start button
startBtn.addEventListener("click", function () {
  if (!started) {
    startGame();
  }
});

function startGame() {
  console.log("Game is Started");
  started = true;
  startBtn.style.display = "none";
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
  console.log("Game sequence:", gameSeq);
  btnflash(randBtn);
}

function chckAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press Any Key or Tap Start to Restart`;
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "#fff";
    }, 200);
    reset();
  }
}

function btnpress() {
  let btn = this;

  userflash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  chckAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  startBtn.style.display = "inline-block";
}
