const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const diagonal = c.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

let a = width ;
let b = length ;
let c = Math.hypot(a,b) ;



console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).");
