const fs = require('fs');
const { controllerTemp } = require('./controllertemp');

var counter = 0;
// export function to list coffee
module.exports = function () {
    var i = i || 0;
    var fileName = 'model_';
    const controller = 'controller';
    console.log('Generating Controllers...');
    console.log('------------------');

    let filename = "controller";
    //create our model

    const randomString = (n, r = '') => {
        while (n--) r += String.fromCharCode((r = Math.random() * 62 | 0, r += r > 9 ? (r < 36 ? 55 : 61) : 48));
        return r;
    };

    //build reliable models and controllers within a large team
    let newFileName = randomString(10);
    if (fs.existsSync('./controller.js')) {
        // Do something
        fs.writeFileSync('controller_' + newFileName + '.js', controllerTemp, { flag: "wx" }, (err) => {
            if (err) throw err;
        });
        console.log('We generated the following controllers,', newFileName);
    } 
    if (!fs.existsSync('./controller.js')) {
        fs.writeFileSync(filename + '.js', controllerTemp, { flag: "wx" }, (err) => {
            if (err) throw err;
        });
        console.log('We generated the following controllers,', filename);
    }

    console.log('Done...');
    console.log('_______________________________________________');
};