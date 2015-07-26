'use strict';

var Promise = require('bluebird');

(function install(retry) {
  Promise.resolve().then(function() {
    return require('./src/fsc')
             .runAsync(['-version'])
             .then(function() {
               console.log('fsc binary install successfully')
             });
  }).then(function() {
    return require('./src/scala')
             .runAsync(['-version'])
             .then(function() {
               console.log('scala binary install successfully')
             });
  }).then(function() {
    return require('./src/scalac')
             .runAsync(['-version'])
             .then(function() {
               console.log('scalac binary install successfully')
             });
  }).then(function() {
    return require('./src/scaladoc')
             .runAsync(['-version'])
             .then(function() {
               console.log('scaladoc binary install successfully')
             });
  }).then(function() {
    return require('./src/scalap')
             .runAsync(['-version'])
             .then(function() {
               console.log('scalap binary install successfully')
             });
  }).catch(function(err) {
      if (retry < 3) {
        console.warn('Retrying: ' + err);
        setTimeout(install, 3000, retry+1);
        return;
      }
      console.error(err);
  });
})(0);