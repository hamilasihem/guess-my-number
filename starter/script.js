const inputNumber = document.querySelector(".guess");
const boutonCheck = document.querySelector(".check");
const msg = document.querySelector(".message");
const score1 = document.querySelector(".score");
const score2 = document.querySelector(".highscore");
const div = document.querySelector(".number");
const btnAgain = document.querySelector(".again");

boutonCheck.addEventListener("click", handelClick);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let scoreValue = 20;
let highscoreValue = 0;
function handelClick() {
  scoreValue--;
  let inpuValue = Number(inputNumber.value);
  score1.textContent = scoreValue;
  if (scoreValue >= 1) {
    if (secretNumber === inpuValue) {
      msg.textContent = "You Are Right!!";
      score2.textContent = scoreValue;
      div.textContent = secretNumber;
      document.body.style.background = "#60b347";
    } else if (secretNumber > inpuValue) {
      msg.textContent = "too low!";
    } else {
      msg.textContent = "too high!";
    }
  } else {
    msg.textContent = "game over!";
    document.body.style.background = "#079407FF";
  }
}
btnAgain.addEventListener("click", Again);
function Again() {
  msg.textContent = "Start guessing...";
  inputNumber.value = "";
  score1.textContent = 20;
  score2.textContent = 0;
  div.textContent = "?";
  document.body.style.backgroundColor = "#222";
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
}
