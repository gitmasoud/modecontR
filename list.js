const fs = require('fs');
const colors = require('colors');
const { types } = require('./values');
const https = require('https')

var counter = 0;
// export function to list coffee
module.exports = function () {
    var i = i || 0;
    var fileName = 'model_';
    const controller = 'controller';
    console.log('COFFEE MENU');
    console.log('------------------');

    // list on separate lines
    types.forEach((type) => {
        console.log('%s %s', colors.bold(type.name), colors.grey('/ ' + type.price));
    });
};