'use strict';

module.exports = require('./common')()
    .use(process.platform === 'win32' ? 'bin/scalap.bat' : 'bin/scalap')
