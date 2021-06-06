let helperFile = require("./command/help");
let viewFile = require("./command/view");
let organizeFile = require("./command/organize");
let input = process.argv.slice(2);
// mycli view "fname" tree
// node mycli.js [view ,dirName]
let command = input[0];


switch (command) {
    case "view":
        viewFile.fn(input[1], input[2]);
        break;
    case "organize":
        organizeFile.fn(input[1]);
        break;
    case "help":
        helperFile.fn();
        break;
    default:
        console.log("wrong command type help for all the commands");
        break;
}
//view
//organize
//help