const program = require('commander');
//import our generators menu
const pingAPI = require('./pingAPI');
//print menu
program
    .option('-c, --class [type]', 'Type class to generate e.g. model or controller');
//any args
program.parse(process.argv);
//system flow and validation
if (program.class === undefined) console.log('No class type argument and value defined. Please add one like so: node index.js --class controller');
else if (program.class === true) console.log('Selected class type argument with no value. Please add one like so: node index.js --class model');
else console.log(`Added class type ${program.class}. So we will go ahead and generate ${program.class}'s for you.`);
//generate models
if (program.class === 'model')
    import('./modelGenerator.js')
        .then((modelGenerator) => {
            return modelGenerator;
        }).catch((err) => { console.log(err) });
//generate controllers
if (program.class === 'controller')
    import('./controllerGenerator.js')
        .then((controllerGenerator) => {
            return controllerGenerator;
        }).catch((err) => { console.log(err) });
//use our PING CLI as an API Pinger to PING any API
if (program.class === 'pingAPI') pingAPI();