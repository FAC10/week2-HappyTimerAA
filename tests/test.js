test('add(1,1) should equal 2', function(assert) {
  var result = add(1, 1); //no change/coins just an empty array
  var expected = 2;
  assert.deepEqual(result, expected);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/
