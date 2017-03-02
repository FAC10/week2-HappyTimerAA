var hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;
    millisecondsDisplay = document.getElementById('milliseconds');
    secondsDisplay = document.getElementById('seconds');
    minutesDisplay = document.getElementById('minutes');
    hoursDisplay = document.getElementById('hours');

function millisecondsTo9 (milliseconds){
    millisecondsDisplay.innerHTML = '0' + milliseconds;
    return '0' + milliseconds;
}

function millisecondsTo99 (milliseconds){
    millisecondsDisplay.innerHTML = milliseconds;
    // return milliseconds;
}

// msToReadable(ms) {
//
// }

function startTimer() {
  milliseconds++;

  if (milliseconds < 10){
    millisecondsTo9(milliseconds);
    // return '0' + milliseconds;
  }

  if (milliseconds <= 99 && milliseconds>9){
    millisecondsTo99(milliseconds);
    return milliseconds;
  }

  if (milliseconds > 99){
    milliseconds = 0;
    seconds++;
    return milliseconds;
  }

  if (seconds > 59){
    seconds = 0;
    minutes++;
    return seconds;
  }
  if (minutes > 59){
    minutes = 0;
    hours++;
    return minutes;
  };
}
// Time Difference: Current Time - Reference Time
var d = new Date();
var startTimeMs = (12*60*60*1000)+(00*60*1000)+(00*1000)+500;
var currentTimeMs = (d.getHours()*60*60*1000)+(d.getMinutes()*60*1000)+(d.getSeconds()*1000)+d.getMilliseconds();
var timeDiff = (currentTimeMs-startTimeMs)>0 ? (currentTimeMs-startTimeMs) : (startTimeMs - currentTimeMs)
console.log(startTimeMs);
console.log(currentTimeMs);
console.log(timeDiff);

var ms = timeDiff % 1000; // remaining milliseconds
var sec = (timeDiff - ms)/1000 % 60 ; // remaining seconds (ms/1000)
var mins = ((timeDiff - ms - (sec*1000))/60000) % 60 ; // remaining minutes (ms/1000 /60)
var hours = ((timeDiff - ms - (sec*1000) - (mins*60000))/3600000) ; // remaining hours (ms/1000 /60 /60)


console.log('ms:'+ms);
console.log('sec:'+sec);
console.log('mins:'+mins);
console.log('hours:'+hours);

console.log(hours+':'+mins+':'+sec+':'+ms)
