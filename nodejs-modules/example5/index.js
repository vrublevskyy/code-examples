'use strict';

const myModule = require('./module');

/*
console.log(myModule);
myModule.myModuleFunction();

*/
const obj1 = new myModule('123'); 
console.log(obj1)

const obj2 = new myModule('12344444'); 
console.log(myModule('12344444'));
console.log(obj2);