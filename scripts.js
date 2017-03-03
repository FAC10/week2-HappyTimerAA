
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

function resetButton() {
    clearInterval(intervalStartStop);
    timeDisplay.innerHTML = '00:00:00:00';
    firstStart = 0;
    startTimeMs = 0;
    currentTimeMs = 0;
    timeGone = 0;
    running = false;
    return running;
}

function firstStartTimer (){
    firstStart = Date.now()
    return firstStart;
}

function getStartTime (){
    startTimeMs = Date.now();
    return startTimeMs;
}

function startButton() {
  if (running !== true){
    clearInterval(intervalStartStop);
    if (firstStart === 0) {
        firstStartTimer ();
    } else {
        getStartTime ()
        timeGone += startTimeMs - stopTimeMs;
    }

    intervalStartStop = setInterval(function() {
        startTimer();
    }, 10);
    running = true;
    return running;
  };
}

function getStopTime(){
  stopTimeMs = Date.now();
  return stopTimeMs;
}

function stopButton() {
    clearInterval(intervalStartStop);
    getStopTime();
    running = false;
    return running;
}

button_start.addEventListener('click', startButton);
button_reset.addEventListener('click', resetButton);
button_stop.addEventListener('click', stopButton);

function getCurrentTime(){
  currentTimeMs = Date.now();
  return currentTimeMs;
}

function startTimer() {
    getCurrentTime();
    var timeDiff = (currentTimeMs - (firstStart + timeGone)) > 0 ? (currentTimeMs - (firstStart + timeGone)) : ((firstStart + timeGone) - currentTimeMs);
    toReadable(timeDiff);
    return timeDiff;
}

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
