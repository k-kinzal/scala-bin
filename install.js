'use strict';

var bin = require('./');

bin.run(['-version'], function (err) {
  if (err) {
    throw err;
  }

  console.log('scala binary install successfully');
});