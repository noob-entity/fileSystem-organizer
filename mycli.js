let helperFile=require("./command/help");
let organizeFile=require("./command/organize");
let viewFile=require("./command/view");
let input=process.argv.slice(2);
let command =input[0];
switch (command) {
    case "view":
        viewFile.fn(input[1],input[2]);
        break;
    case "organize":
        organizeFile.fn();
        break;
    case "help":
        helperFile.fn();
        break;
    default:
        console.log("Wrong command type help for all commands");
        break;
}