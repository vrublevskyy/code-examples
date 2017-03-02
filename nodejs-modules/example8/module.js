'use strict';
 
let message = 'Inside myModuleFunction';

function myModuleFunction() {

    console.log(message);   
};

function setMessage(message3) {

    message =  message3;
};

module.exports = (message2) => {

    message = message2;

    return {
        myModuleFunction,
        setMessage
    }
}