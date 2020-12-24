const fs = require('fs');
const { modelTemp } = require('./modelTemp');

var counter = 0;
// export function to list coffee
module.exports = function () {
    var i = i || 0;
    var fileName = 'model_';
    const controller = 'controller';
    console.log('Generating Models...');
    console.log('------------------');

    let filename = "model";
    //create our model

    const randomString = (n, r = '') => {
        while (n--) r += String.fromCharCode((r = Math.random() * 62 | 0, r += r > 9 ? (r < 36 ? 55 : 61) : 48));
        return r;
    };

    //build reliable models and controllers within a large team
    let newFileName = randomString(10);
    if (fs.existsSync('./model.js')) {
        // Do something
        fs.writeFileSync('model_' + newFileName + '.js', modelTemp, { flag: "wx" }, (err) => {
            if (err) throw err;
        });
        console.log('We generated the following models,', newFileName);
    } 
    if (!fs.existsSync('./model.js')) {
        fs.writeFileSync(filename + '.js', modelTemp, { flag: "wx" }, (err) => {
            if (err) throw err;
        });
        console.log('We generated the following models,', filename);
    }

    console.log('Done...');
    console.log('_______________________________________________');
};