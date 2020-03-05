/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
*/

const prompt = require('prompt');

prompt.start();

/**
 * Awesome work here this is some slick code! The exercise did specify to pull this functionallity in 
 * from 2 other files, however you've demonstrated you can do that in other places of you work so I'm 
 * not sweating it however always remeber attention to detail on requirements. 
 */
prompt.get(['username', 'email'], function (err, result) { // <-- might consider using ES6 arrow functions
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});

function onErr(err) {
    console.log(err);
    return 1;
}