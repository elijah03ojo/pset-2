const readlineSync = require("readline-sync")

let width = readlineSync.question("\n What is the width? \n");
let length = readlineSync.question("\n What is the length? \n");


console.log("\nA " + width +  " by " + length + " inch sheet of paper has an area of " + width * length + " inches")

