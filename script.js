/**
 * Global variables
 * -> Timer
 * -> Buttons
 */

let timerInterval;
let milliseconds = 0;

const timer = document.getElementById('timer');

const roundTimerBtn = document.getElementById('round-timer-btn');
const stopTimerBtn = document.getElementById('stop-timer-btn');
const startTimerBtn = document.getElementById('start-timer-btn');


// Starts timer
startTimerBtn.addEventListener('click', () => {
    timerInterval = setInterval(updateInterval, 10);
})

// Updates timer 
function updateInterval() {
    milliseconds += 10;

    //
    const totalSeconds = Math.floor(milliseconds / 1000);

    // Extract minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Extract milliseconds (3 digits)
    const millis = (milliseconds % 1000 / 10).toString().padStart(2, '0');

    // Create "mm:ss,ms" format
    const formattedTime = /*html*/  `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')},${millis}`;

    // Insert formatted text into HTML container
    timer.innerText = formattedTime;
};


// Stop timer
stopTimerBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
});