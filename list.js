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

    //below we can test JSON API's (web services/endpoints) by doing http get (same as fetch)
    //this is powerful as we can abstract the layer and put in it's own class
    https.get('https://tools.learningcontainer.com/sample-json.json', res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
        });
    });
};