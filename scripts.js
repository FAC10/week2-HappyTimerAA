(function(window){
var   timeDisplay = document.getElementById('timeDisplay');
      button_start = document.getElementById('button_start');
      button_reset = document.getElementById('button_reset');
      button_stop = document.getElementById('button_stop');
      currentTimeMs = 0;
      stopTimeMs = 0;
      startTimeMs = 0;
      timeGone = 0;
      intervalStartStop = 0;

      running = false;

function startButton() {
    clearInterval(intervalStartStop);
    console.log(startTimeMs)
    var d = new Date();
    if (startTimeMs === 0) {
        startTimeMs = (d.getHours() * 60 * 60 * 1000) + (d.getMinutes() * 60 * 1000) + (d.getSeconds() * 1000) + d.getMilliseconds();
    }

    intervalStartStop = setInterval(function() {
        startTimer();
    }, 10);
    running = true;
}

function resetButton() {
    clearInterval(intervalStartStop);
    timeDisplay.innerHTML = '00:00:00:00';
    startTimeMs = 0;
    currentTimeMs = 0;
    running = false;
}

function stopButton() {
    clearInterval(intervalStartStop);
    var d = new Date();
    stopTimeMs = (d.getHours() * 60 * 60 * 1000) + (d.getMinutes() * 60 * 1000) + (d.getSeconds() * 1000) + d.getMilliseconds();
    console.log(stopTimeMs);
    running = false;
    return running;
}

button_start.addEventListener('click', startButton);
button_reset.addEventListener('click', resetButton);
button_stop.addEventListener('click', stopButton);

function startTimer() {
    var d = new Date();
    currentTimeMs = (d.getHours() * 60 * 60 * 1000) + (d.getMinutes() * 60 * 1000) + (d.getSeconds() * 1000) + d.getMilliseconds();
    var timeDiff = (currentTimeMs - startTimeMs) > 0 ? (currentTimeMs - startTimeMs) : (startTimeMs - currentTimeMs);
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

})(window)
