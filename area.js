const readlineSync = require("readline-sync")

let width = readlineSync.question("\n width: \n");
let length = readlineSync.question("\n length: \n");


console.log("\nA(n) " + width +  " by " + length + " inch sheet of paper has an area of " + (width * length) * 25.4 ** 2 + " square millimeter(s)")
