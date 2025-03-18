const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const number = Number(input)
const array = [3,1,4,1,5,9,2,6,5,3]

console.log(array[number])