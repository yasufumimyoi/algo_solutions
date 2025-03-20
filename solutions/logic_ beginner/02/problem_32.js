const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const total = lines[1].split(' ').map(Number).reduce((sum, element) => sum + element) 
const average = Math.trunc(total / Number(lines[0]))

console.log(average)
