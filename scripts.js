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
    return milliseconds;
  }
}
