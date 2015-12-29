// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});

Tinytest.add('node-metainspector', function (test) {
  var metainspector = Npm.require('node-metainspector')
  test.equal("function", typeof(metainspector));
});

Tinytest.add('SyncFetch', function (test) {
  result = Metainspector.fetch("http://winroad.main.jp/blog/?p=1515")


  test.equal("string", typeof(result.title));
});
