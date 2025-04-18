const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const numbers = lines[1].split(' ').map(Number)
const max = Math.max(...numbers)
const target =  numbers.filter((item) => item === max)
console.log(target.length)