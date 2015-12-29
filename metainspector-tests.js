// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});

Tinytest.add('node-metainspector', function (test) {
  var metainspector = Npm.require('node-metainspector')
  test.equal("function", typeof(metainspector));
});
