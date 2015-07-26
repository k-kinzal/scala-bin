'use strict';

module.exports = require('./common')()
    .use(process.platform === 'win32' ? 'bin/fsc.bat' : 'bin/fsc')
