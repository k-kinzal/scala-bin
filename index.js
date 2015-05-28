'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');

var version = '2.11.6';

var bin = new BinWrapper();
bin.src('http://downloads.typesafe.com/scala/' + version + '/scala-' + version + '.tgz', 'darwin');
bin.src('http://downloads.typesafe.com/scala/' + version + '/scala-' + version + '.tgz', 'linux');
bin.dest(path.join(__dirname, 'vendor'));
bin.use(process.platform === 'win32' ? 'bin/scala.bat' : 'bin/scala');

module.exports = bin;
