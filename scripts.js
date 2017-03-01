var hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;

function startTimer() {
  milliseconds++;
  if (milliseconds <=99){
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
