const timer = document.querySelector('.display-timer');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;
let ms = 0;
let secs = 0;
let mins = 0;
let hrs = 0;
let paused = true;

function startTimer() {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(formatTime, 10);
  }
}

function formatTime() {
  elapsedTime = Date.now() - startTime;

  ms = Math.floor((elapsedTime % 1000) / 10);
  secs = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  hrs = Math.floor(elapsedTime / (1000 * 60 * 60));

  if (ms < 10) ms = '0' + ms;
  if (secs < 10) secs = '0' + secs;
  if (mins < 10) mins = '0' + mins;
  if (hrs < 10) hrs = '0' + hrs;

  timer.innerHTML = `${hrs}:${mins}:${secs}<span>.${ms}</span>`;
}

function pauseTimer() {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(timeInterval);
  }
}

function resetTimer() {
  clearInterval(timeInterval);
  elapsedTime = 0;
  paused = true;
  timer.textContent = '00:00:00';
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
