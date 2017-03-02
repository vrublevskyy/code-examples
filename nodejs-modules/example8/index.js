'use strict';

const myModule = require('./module')('Hola');

myModule.myModuleFunction();
myModule.setMessage('Hola2');
myModule.myModuleFunction();