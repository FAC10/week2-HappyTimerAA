
var  timeDisplay = document.getElementById('timeDisplay');
var  button_start = document.getElementById('button_start');
var  button_reset = document.getElementById('button_reset');
var  button_stop = document.getElementById('button_stop');
var  currentTimeMs = 0;
var  stopTimeMs = 0
var  firstStart = 0;
var  startTimeMs = 0;
var  timeGone = 0;
var  intervalStartStop = 0;
var  running = false;

button_start.addEventListener('click', startButton);
button_reset.addEventListener('click', resetButton);
button_stop.addEventListener('click', stopButton);


// Records the first time the Start button has been pressed.
// This is out initial reference point.
function firstStartTimer (){
    firstStart = Date.now();
    return firstStart;
};

// The setInterval runs the code to constantly compare the current time with the reference time ie var firstStart.
function getCurrentTime(){
  currentTimeMs = Date.now();
  return currentTimeMs;
};

// Records when the stop button was pressed.
// This point in time will be used to figure out how long the stopwatch was not in use.
function getStopTime(){
  stopTimeMs = Date.now();
  return stopTimeMs;
};

// Records when the start button was pressed, all the times AFTER the first ever pressing on the start button.
// This point in time will be used with the variable 'stopTimeMs' to figure out how long the stopwatch was not in use.
function getStartTime (){
    startTimeMs = Date.now();
    return startTimeMs;
};

// This function is invoked when the start button is pressed.
// It in turn invokes the startTimer() function.
// timeGone is the period of time the stopwatch was not in use. This time is added to our variable 'firstStart'.
function startButton() {
  if (running !== true){
    clearInterval(intervalStartStop);
    if (firstStart === 0) {
        firstStartTimer ();
    } else {
        getStartTime ();
        timeGone += startTimeMs - stopTimeMs;
    }

    intervalStartStop = setInterval(function() {
        startTimer();
    }, 10);
    running = true;
    return running;
  };
};

// Stops the setInterval from running.
function stopButton() {
    clearInterval(intervalStartStop);
    getStopTime();
    running = false;
    return running;
};

// Resets all variables and display.
function resetButton() {
    clearInterval(intervalStartStop);
    timeDisplay.innerHTML = '00:00:00:00';
    firstStart = 0;
    startTimeMs = 0;
    currentTimeMs = 0;
    timeGone = 0;
    running = false;
    return running;
};

// Compares the current time with a reference time and this period of time which is the amount of time
// the stopwatch has been running, is displayed in the browser.
// The if statement ensures that the difference is always positive.
function startTimer() {
    getCurrentTime();
    var timeDiff = (currentTimeMs - (firstStart + timeGone)) > 0 ? (currentTimeMs - (firstStart + timeGone)) : ((firstStart + timeGone) - currentTimeMs);
    toReadable(timeDiff);
    return timeDiff;
};

// Converts our time into a readable form i.e. hours:mins:secs:milliseconds.
// slice ensures that 1 seconds is displayed as '01' and 10 seconds is displayed as '10'.
function toReadable(timeDiff){
    var ms = timeDiff % 1000; // remaining milliseconds
    var sec = (timeDiff - ms) / 1000 % 60; // remaining seconds (ms/1000)
    var mins = ((timeDiff - ms - (sec * 1000)) / 60000) % 60; // remaining minutes (ms/1000 /60)
    var hours = ((timeDiff - ms - (sec * 1000) - (mins * 60000)) / 3600000); // remaining hours (ms/1000 /60 /60)
    var ms2sf = Math.round(ms / 10);
    ms2sf = ('00' + ms2sf).slice(-2);
    sec = ('00' + sec).slice(-2);
    mins = ('00' + mins).slice(-2);
    hours = ('00' + hours).slice(-2);
    timeDisplay.innerHTML = hours + ':' + mins + ':' + sec + ':' + ms2sf;
    return ms2sf.length;
};
