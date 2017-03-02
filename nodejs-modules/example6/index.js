'use strict';

const myModuleA = require('./module');

myModuleA.myModuleFunction();

myModuleA.message = 'New Message';

const myModuleB = require('./module');

 myModuleB.myModuleFunction();
 
 /*
setInterval(function() {
    myModuleB.myModuleFunction();
}, 3000);
*/