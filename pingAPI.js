const fs = require('fs');
const { colors } = require('colors');
const { types } = require('./values');
const https = require('https')

var counter = 0;
// export function to list coffee
module.exports = function () {
    console.log('Pinging API...');
    console.log('------------------');

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
            console.log('------------------');
            console.log(`Pinged API and the results are above. If you don't see what you expect then check the request code`);
        });
    });
   
   //we can even do more cool things like extract the payload recieved (API response) and generate 
    //a response model again using Commander by passing it as an argument
};