'use strict';

module.exports = require('./common')()
    .use(process.platform === 'win32' ? 'bin/scaladoc.bat' : 'bin/scaladoc')
