var hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;
    millisecondsDisplay = document.getElementById('milliseconds');
    secondsDisplay = document.getElementById('seconds');
    minutesDisplay = document.getElementById('minutes');
    hoursDisplay = document.getElementById('hours');

function startTimer() {
  milliseconds++;

  // if (milliseconds < 10){
  //   millisecondsDisplay.innerHTML = '0' + milliseconds;
  // }

  if (milliseconds <= 99){
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
  }
}
