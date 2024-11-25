const ruleBtn = document.getElementById("ruleBtn");
const ruleInfo = document.getElementById("ruleInfo");
const closeBtn = document.getElementById("xCircle");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const youScore = document.getElementById("youScore");
const compScore = document.getElementById("compScore");
const centerCard = document.getElementById("playBtns");
const afterPlay = document.getElementById("afterPlay");
const youPlayed = document.getElementById("youPlayed");
const compPlayed = document.getElementById("compPlayed");
const playAgain = document.getElementById("playAgain");
const resetScore = document.getElementById("resetScore");
const nextBtn = document.getElementById("nextBtn");
const winOrLose = document.getElementById("winOrLose");

let isWin = false;
let you_score;
let comp_score;

const comp = {
  0: "rock",
  1: "paper",
  2: "scissor",
};

ruleBtn.addEventListener("click", () => {
  ruleInfo.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  ruleInfo.style.display = "none";
});

playAgain.addEventListener("click", () => {
  window.location.reload();
});

resetScore.addEventListener("click", () => {
  localStorage.setItem("userScore", 0);
  localStorage.setItem("compScore", 0);
  you_score = 0;
  comp_score = 0;
  youScore.textContent = you_score;
  compScore.textContent = comp_score;
  window.location.reload();
});

window.addEventListener("load", () => {
  afterPlay.style.display = "none";
  if (localStorage.getItem("userScore") === null) {
    localStorage.setItem("userScore", 0);
  } else {
    you_score = Number(localStorage.getItem("userScore"));
  }
  if (localStorage.getItem("compScore") === null) {
    comp_score = localStorage.setItem("compScore", 0);
  } else {
    comp_score = Number(localStorage.getItem("compScore"));
  }
  youScore.textContent = you_score;
  compScore.textContent = comp_score;
  isWin = false;
  nextBtn.style.display = "none";
});

const computerTurn = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  return comp[randomNumber];
};

const updateUI = (user, comp) => {
  centerCard.style.display = "none";
  afterPlay.style.display = "block";
  youPlayed.src = `./images/${user}.png`;
  compPlayed.src = `./images/${comp}.png`;
  if (user === comp) {
    winOrLose.textContent = "DREW";
  } else {
    winOrLose.textContent = isWin ? "WON" : "LOST";
  }
};

const updateScore = () => {
  youScore.textContent = you_score;
  compScore.textContent = comp_score;
  localStorage.setItem("userScore", you_score);
  localStorage.setItem("compScore", comp_score);
  if (isWin) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
};

rock.addEventListener("click", () => {
  isWin = false;
  const compRes = computerTurn();
  updateUI("rock", compRes);
  if (compRes == "rock") {
    you_score += 1;
    comp_score += 1;
  } else if (compRes == "paper") {
    comp_score += 1;
  } else {
    you_score += 1;
    isWin = true;
  }
  updateScore();
});

paper.addEventListener("click", () => {
  isWin = false;
  const compRes = computerTurn();
  updateUI("paper", compRes);
  if (compRes == "paper") {
    you_score += 1;
    comp_score += 1;
  } else if (compRes == "scissor") {
    comp_score += 1;
  } else {
    you_score += 1;
    isWin = true;
  }
  updateScore();
});

scissor.addEventListener("click", () => {
  isWin = false;
  const compRes = computerTurn();
  updateUI("scissor", compRes);
  if (compRes == "scissor") {
    you_score += 1;
    comp_score += 1;
  } else if (compRes == "paper") {
    comp_score += 1;
  } else {
    you_score += 1;
    isWin = true;
  }
  updateScore();
});
