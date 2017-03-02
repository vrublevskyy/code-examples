'use strict';

const common = require('./common');

let i = 0;
setInterval(function() {

    i++;
    common.message = i;
}, 3000);