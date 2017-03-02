test('when startTimer function is run, does milliseconds incriment', function(assert) {
  var expected = milliseconds + 1;
  var result = startTimer();
  assert.equal(result, expected, 'millisecond incremented by one');
});

test('when milliseconds reach 100 it should reset to 00', function(assert) {
  if (milliseconds > 99) {
    var expected = 0;
    var result = startTimer();
  }
  assert.equal(result, expected, 'millisecond reset to 00');
});

test('when milliseconds reach 100 seconds should increment', function(assert) {
  if (milliseconds > 99) {
    var expected = seconds++;
    var result = startTimer();
  }
  assert.equal(result, expected, 'seconds incremented');
});

test('when seconds reach 60 it should reset to 00', function(assert) {
  if (seconds > 59) {
    var expected = 0;
    var result = startTimer();
  }
  assert.equal(result, expected, 'second reset to 00');
});

test('when seconds reach 60, minutes should increment by one', function(assert) {
    if (seconds > 59) {
      var expected = minutes++;
      var result = startTimer();
    }
  assert.equal(result, expected, 'minutes incremented');
});

test('when minutes reach 60 it should reset to 00', function(assert) {
  if (minutes > 59) {
    var expected = 0;
    var result = startTimer();
  }
  assert.equal(result, expected, 'minutes reset to 00');
});

test('when minutes reach 60, hours should increment by one', function(assert) {
  if (minutes > 59) {
    var expected = hours++;
    var result = startTimer();
  }
  assert.equal(result, expected, 'hours incremented');
});


test('when startTimer runs, document.getElementById('milliseconds') should update', function(assert) {

  assert.equal(result, expected, 'hours incremented');
});
//
// asyncTest('after one second passes, seconds should equal 1', function() {
//         setTimeout(function() {
//         assert.equal(true);
//
//         // After the assertion has been called,
//         // continue the test
//         start();
//     }, 100)
// })
