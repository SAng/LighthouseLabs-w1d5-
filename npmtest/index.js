var chalk = require("chalk");

var message = "Hello " + chalk.yellow.bold.blue("World x") + chalk.blue("blue");
console.log(message);