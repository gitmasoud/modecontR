const program = require('commander');
//import our generators menu
const modelGenerator = require('./modelGenerator');
const controllerGenerator = require('./controllerGenerator');
const list = require('./list');
const pingAPI = require('./pingAPI');
//to do add a commander menu so we can call any CLI or genator from here
// print menu
program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --argz', 'args passed in')
    .option('-p, --cli-type <type>', 'CLI chosen');
program.parse(process.argv);
if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.argz) console.log('- argz');
if (program.cliType === 'model') modelGenerator();
if (program.cliType === 'controller') controllerGenerator();
if (program.cliType === 'list') list();
if (program.cliType === 'pingAPI') pingAPI();