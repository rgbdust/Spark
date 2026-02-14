const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let secondsLeft = 25 * 60;
let intervalId = null;

function updateDisplay() {
  const min = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const sec = (secondsLeft % 60).toString().padStart(2, "0");
  timerEl.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    if (secondsLeft > 0) {
      secondsLeft--;
      updateDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  secondsLeft = 25 * 60;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
