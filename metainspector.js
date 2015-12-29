// Write your package code here!
var _MetaInspector = Npm.require('node-metainspector')

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
  var client = new _MetaInspector(url, { timeout: 5000 });

  client.on("fetch", function(){
      result = simpleStringify(client)
      callback(null,result)
  });

  client.on("error", function(err){
  });

  client.fetch();
}

Metainspector = {
  fetch:function(url){
    var syncFetch = Async.wrap(fetch)
    return syncFetch(url)
  }
}
