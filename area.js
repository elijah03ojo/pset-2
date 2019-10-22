const readlineSync = require("readline-sync")

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
const inches_to_millimeters = 25.4;
let area= (width * length) * inches_to_millimeters ** 2
area = area.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nA(n) " + width +  "-by-" + length + " inch sheet of paper has an area of " + area + " square millimeter(s)")
