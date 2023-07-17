"use strict";

const number = document.querySelector(".number");
const score = document.querySelector(".score");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");
const again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let numberScore = 0;

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    message.textContent = "No Number";
  } else if (guess === secretNumber) {
    message.textContent = "Congratulations, You Won";
    score.textContent = currentScore;
    if (numberScore < currentScore) {
      highscore.textContent = currentScore;
    }
    numberScore = currentScore;
    body.style.backgroundColor = "#60b347";
    number.textContent = secretNumber;
    number.style.width = "30rem";
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      message.textContent = guess > secretNumber ? "Too High" : "Too Low";
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = "Sorry, You Lost";
      score.textContent = 0;
      body.style.backgroundColor = "red";
      number.textContent = secretNumber;
    }
  }
});

again.addEventListener("click", function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
});
