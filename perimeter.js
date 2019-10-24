const readlineSync = require("readline-sync")

let width = readlineSync.question("\n width: \n");
let length = readlineSync.question("\n length: \n");


console.log("\nA(n) " + width +  "-by-" + length + " inch sheet of paper has a perimeter of " + (2*width + 2*length) * (2.54)  + " centimeters(s)")
