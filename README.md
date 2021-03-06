# week2-HappyTimerAA

## What

 - We were tasked with creating a stopwatch using TDD methodology

**User Stories**

We are creating the stopwatch for a software developer who wants to accurately predict how long a coding task takes to complete. The developer needs the following:

- [x] I can press a start button, in order to start a timer
- [x] I can press a stop button, in order to stop the timer at how much time has passed since start
- [x] I can press a reset button, in order to stop the timer and reset the displayed time to 00:00:00:00
- [x] I can see the timer's current time in hours, seconds, minutes and milliseconds

**Stretch Goals**

- [ ] Use BlanketJS for code coverage
- [ ] Countdown Timer
- [ ] Pomodoro Timer (to time out breaks)
- [ ] Add alarm sound when timer finishes
- [ ] Add prompt if user exits webpage while timer running
- [ ] CSS bomb animation
- [ ] Add realtime on watch face
- [ ] Buttons disappear when timer started
- [ ] Countdown till special dates in the year e.g. Christmas

## How

1. Set up documents and test files
2. 1.5 hour technical spike
3. Create issues for individually assigned tasks
4. Use TDD methodology and ping pong (i.e write tests before writing code)

## Interesting Stuff We have Learnt

 **Asynchronous Testing**

 When testing asynchronous features such as setTimeout() and setInterval(), you need to use asynchronous testing

 [Test Asynchronous Code](https://www.sitepoint.com/test-asynchronous-code-qunit/)
[Asynchronous testing](https://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077)

**onclick functions vs addEventListener**

In general, apparently using addEventListener is preferable to using onclick functions.

**Date.now() vs setInterval()**

At first we were going to use setInterval() to get the time, but we soon realised this wasn't the best way. setInterval() pushes things to the event loop, and was an easy way to introduce lag to the timer. Instead we calculated the time past using Date.now(). We calculated the difference between when the timer was started and the current time, then got the time from this.

// var d = new Date();
// (d.getHours()*60*60*1000) + (d.getMinutes()*60*1000) + (d.getSeconds()*1000) + d.getMilliseconds());

**Revert to previous commit**

At one point we had to revert to a previous commit. There are two ways to do this:

1. git checkout (commit id)
2. git push -f origin  commit id: master (this deletes previous commits so avoid)

**Referential Transparency**

An additional property of pure functions is referential transparency. This is a rather complex term with a simple meaning: given the same inputs, the output is always the same.

**Variable Names**

When we wrote the code we didn't use the best variable names. For example, startTimer() doesn't actually start the timer, and some of our function names didn't have a verb in them. 
