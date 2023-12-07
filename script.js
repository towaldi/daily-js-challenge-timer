/**
 * Global variables
 * -> Timer
 * -> Buttons
 * -> Round list
 */

let timerInterval;
let milliseconds = 0;

const timer = document.getElementById('timer');

const roundTimerBtn = document.getElementById('round-timer-btn');
const stopTimerBtn = document.getElementById('stop-timer-btn');
const resetTimerBtn = document.getElementById('reset-timer-btn');
const startTimerBtn = document.getElementById('start-timer-btn');

let roundCounter = 1;
let roundList = document.getElementById('rounds-list');


// Starts timer
startTimerBtn.addEventListener('click', () => {
    timerInterval = setInterval(updateInterval, 10);
})

// Updates timer 
function updateInterval() {
    milliseconds += 10;

    // Calculate hole seconds
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

    // Stops timer
    clearInterval(timerInterval);

    // Hide button
    stopTimerBtn.classList.add('d-none');

    // Show reset button
    resetTimerBtn.classList.remove('d-none');
});


// Reset timer
resetTimerBtn.addEventListener('click', () => {
    // Stops timer
    clearInterval(timerInterval);

    // Rests timmer to "00:00,00"
    milliseconds = 0;
    timer.innerText = '00:00,00';

    // Hide button
    resetTimerBtn.classList.add('d-none');

    // Show stop button
    stopTimerBtn.classList.remove('d-none');

    // Rest roundList
    roundList.innerHTML = '';
});


// Save time - round
roundTimerBtn.addEventListener('click', () => {

    // Capture current time
    const currentTimerValue = timer.innerText;

    // Create "round count + current time" format
    roundList.innerHTML += /*html*/   `<div class="round">
                                <span>Round ${roundCounter}</span>
                                <span>${currentTimerValue}</span>
                            </div>`;

    // Increase counter by 1
    roundCounter++;
});