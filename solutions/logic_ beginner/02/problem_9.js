const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const year = Number(input);

const isLeapYear = (year) => 
  year % 400 === 0 ? "Yes" :
  year % 100 === 0 ? "No" :
  year % 4 === 0   ? "Yes" : "No";

console.log(isLeapYear(year));
