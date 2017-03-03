test('test to see if QUnit is working', function(assert) {
  var expected = 2;
  var result = 1 +1;
  assert.equal(result, expected, 'test');
});

test('stopButton function should return false', function(assert) {
  var expected = false;
  var result = stopButton();
  assert.equal(result, expected, 'stopButton returns false');
});

test('resetButton function should return false', function(assert) {
  var expected = false;
  var result = resetButton();
  assert.equal(result, expected, 'resetButton returns false');
});

test('startButton function should return true', function(assert) {
  var expected = true;
  var result = startButton();
  assert.equal(result, expected, 'startButton returns true');
});

test('getStopTime function should return current date', function(assert) {
  var expected = Date.now();
  var result = getStopTime();
  assert.equal(result, expected, 'getStopTime returns date');
});

test('getStartTime function should return current date', function(assert) {
  var expected = Date.now();
  var result = getStartTime();
  assert.equal(result, expected, 'getStartTime returns date');
});

test('getCurrentTime function should return current date', function(assert) {
  var expected = Date.now();
  var result = getCurrentTime();
  assert.equal(result, expected, 'getCurrentTime returns date');
});

test('firstStartTimer function should return current date', function(assert) {
  var expected = Date.now();
  var result = firstStartTimer();
  assert.equal(result, expected, 'firstStartTimer returns date');
});

QUnit.test( "When startButton is run, firstStart should be greater than 0", function( assert ) {
  var done = assert.async();
  startButton();
  setTimeout(function() {
    assert.ok(firstStart>0);
    done();
  },10);
});

QUnit.test('When startTimer is run, timeDiff is > -1', function(){
    ok(startTimer(), 'timeDiff is > -1')
});

QUnit.test('toReadable should return ms2sf should have a length of 2', function(assert) {
  var expected = 2;
  var result = toReadable();
  assert.equal(result, expected, 'ms2sf has a length of 2');
});


QUnit.test( "When startButton is run, startTimeMs should equal 0", function( assert ) {
  var done = assert.async();
  startButton();
  setTimeout(function() {
    assert.ok(startTimeMs === 0);
    done();
  },10);
});
