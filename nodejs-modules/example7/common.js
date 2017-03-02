'use strict';

function myModuleCreator() {

    this.message = 'Inside myModuleFunction';
    this.myModuleFunction = () => {

        console.log(this.message);
    }   
};

module.exports = new myModuleCreator();