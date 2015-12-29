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
  var MetaInspector = Npm.require('node-metainspector')

  function simpleStringify (object){
      var simpleObject = {};
      for (var prop in object ){
          if (!object.hasOwnProperty(prop)){
              continue;
          }
          if (typeof(object[prop]) == 'object'){
              continue;
          }
          if (typeof(object[prop]) == 'function'){
              continue;
          }
          simpleObject[prop] = object[prop];
      }
      return simpleObject // returns cleaned up JSON
      // return JSON.stringify(simpleObject); // returns cleaned up JSON
  };
  
  function fetch(url,callback){
    var client = new MetaInspector(url, { timeout: 5000 });

    client.on("fetch", function(){
        callback(null,client)
        console.log("Description: " + client.description);
    });

    client.on("error", function(err){
        console.log(error);
    });

    client.fetch();
  }
  var syncFetch = Async.wrap(fetch)
  var result = syncFetch("https://github.com/meteorhacks/meteor-async")
  test.equal("string", typeof(result.title));
});
