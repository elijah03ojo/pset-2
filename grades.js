const readlineSync = require("readline-sync");

const first_homework = readlineSync.question("\n Enter three homework grades. \n");
const second_homework = readlineSync.question("");
const third_homework = readlineSync.question("");

const first_quiz = readlineSync.question("\n Enter three quiz grades. \n");
const second_quiz = readlineSync.question("");
const third_quiz = readlineSync.question("");

const first_test = readlineSync.question("\n Enter three test grades. \n");
const second_test = readlineSync.question("");
const third_test = readlineSync.question("");

let totalhomework = ((first_homework + second_homework + third_homework)/3) *0.15;
let totalquiz = ((first_quiz + second_quiz + third_quiz)/3) *0.35;
let totaltest = ((first_test + second_test + third_test)/3) *0.50;

let markinggrade = (totalhomework + totalquiz + totaltest);

markinggrade = markinggrade.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nYour marking period grade is " + parsefloat(markinggrade).toFixed(2).toLocaleString() + "%");
