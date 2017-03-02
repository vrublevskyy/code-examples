'use strict';

function myModuleCreator(arg) {

    this.message = 'Inside myModuleFunction';
    this.message2 = arg
    this.myModuleFunction = () => {

        console.log(this.message, this.message2);
    }     
};

module.exports = myModuleCreator;