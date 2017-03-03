
var   timeDisplay = document.getElementById('timeDisplay');
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
}

function firstStartTimer (){
    firstStart = Date.now()
    console.log("first"+firstStart);
}

function getStartTime (){
    startTimeMs = Date.now()
}

function startButton() {
  if (running !== true){
    clearInterval(intervalStartStop);
    console.log("firstStartTime"+firstStart);
    console.log("stopTime"+stopTimeMs);
    console.log("startTimeMs"+startTimeMs);
    if (firstStart === 0) {
        firstStartTimer ();
    } else {
        getStartTime ()
        timeGone += startTimeMs - stopTimeMs;
        console.log("helloooo?"+timeGone)
    }

    intervalStartStop = setInterval(function() {
        startTimer();
    }, 10);
    running = true;
  };
}

function getStopTime(){
  stopTimeMs = Date.now();
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
}

function startTimer() {
    getCurrentTime();
    var timeDiff = (currentTimeMs - (firstStart + timeGone)) > 0 ? (currentTimeMs - (firstStart + timeGone)) : ((firstStart + timeGone) - currentTimeMs);
    toReadable(timeDiff);
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
};


// var d = new Date();
// (d.getHours()*60*60*1000) + (d.getMinutes()*60*1000) + (d.getSeconds()*1000) + d.getMilliseconds();
