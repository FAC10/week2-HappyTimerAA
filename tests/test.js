test('when startTimer function is run, does milliseconds incriment', function(assert) {
  var expected = milliseconds + 1;
  var result = startTimer();
  assert.equal(result, expected, 'millisecond incremented by one');
});

test('when milliseconds reaches 100 it should reset to 00', function(assert) {
  var expected = milliseconds + 1;
  var result = startTimer();
  assert.equal(result, expected, 'millisecond reset to 00');
});
