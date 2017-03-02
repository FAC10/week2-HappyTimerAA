var timeDisplay = document.getElementById('timeDisplay');
    button_start = document.getElementById('button_start');
    button_reset = document.getElementById('button_reset');
    interval = 0;
    startTimeMs = 0;
    currentTimeMs = 0;

button_start.onclick = function() {
  setInterval(function(){
    startTimer();
  }, 10);
}

button_reset.onclick = function() {
  clearInterval();
  timeDisplay.innerHTML = '00:00:00:00';
  startTimeMs = 0;
  currentTimeMs = 0;
}

function startTimer() {
  var d = new Date();
  if (startTimeMs === 0){
    startTimeMs = (d.getHours()*60*60*1000)+(d.getMinutes()*60*1000)+(d.getSeconds()*1000)+d.getMilliseconds();
  }

  currentTimeMs = (d.getHours()*60*60*1000)+(d.getMinutes()*60*1000)+(d.getSeconds()*1000)+d.getMilliseconds();

  var timeDiff = (currentTimeMs-startTimeMs)>0 ? (currentTimeMs-startTimeMs) : (startTimeMs - currentTimeMs)

  var ms = timeDiff % 1000; // remaining milliseconds
  var sec = (timeDiff - ms)/1000 % 60 ; // remaining seconds (ms/1000)
  var mins = ((timeDiff - ms - (sec*1000))/60000) % 60 ; // remaining minutes (ms/1000 /60)
  var hours = ((timeDiff - ms - (sec*1000) - (mins*60000))/3600000) ; // remaining hours (ms/1000 /60 /60)
  var ms2sf = Math.round(ms/10);

  ms2sf = ('00' + ms2sf).slice(-2);
  sec = ('00' + sec).slice(-2);
  mins = ('00' + mins).slice(-2);
  hours = ('00' + hours).slice(-2);

  timeDisplay.innerHTML = hours+':'+mins+':'+sec+':'+ms2sf;

}
