Package.describe({
  name: 'takashi:metainspector',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'Scrape website and get title,image,describe.wrapper for node-metainspector',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/endotakashi1992/meteor-metainspector',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({"node-metainspector":'1.2.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('meteorhacks:async@1.0.0');
  api.addFiles('metainspector.js',['server']);
  api.export('Metainspector', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteorhacks:async');
  api.use('takashi:metainspector');
  api.export('Metainspector', 'server');
  api.addFiles('metainspector.js',['server']);
  api.addFiles('metainspector-tests.js',['server']);
});
