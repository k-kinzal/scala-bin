'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');

var version = '2.11.6';

var bin = new BinWrapper();
bin.src('http://downloads.typesafe.com/scala/' + version + '/scala-' + version + '.tgz', 'darwin');
bin.src('http://downloads.typesafe.com/scala/' + version + '/scala-' + version + '.tgz', 'linux');
bin.dest(path.join(__dirname, 'vendor'));

bin.download(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  var binaries = require('./');
  Object.keys(binaries).forEach(function(name) {
    binaries[name].run(['-version'], function (err) {
      if (err) {
        throw err;
      }

      console.log(name + ' binary install successfully');
    });
  });
});



