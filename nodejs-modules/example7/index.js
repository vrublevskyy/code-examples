'use strict';

const common = require('./common');

common.myModuleFunction();

setInterval(function() {

    common.myModuleFunction();
}, 3000);

require('./moduleB')