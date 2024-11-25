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
  youScore.innerText = you_score;
  compScore.innerText = comp_score;
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
  youScore.innerText = you_score;
  compScore.innerText = comp_score;
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
};

const updateScore = () => {
  youScore.innerText = you_score;
  compScore.innerText = comp_score;
  localStorage.setItem("userScore", you_score);
  localStorage.setItem("compScore", comp_score);
};

rock.addEventListener("click", () => {
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
