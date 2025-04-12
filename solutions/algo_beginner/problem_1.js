const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const [_, target] = lines[0].split(' ').map(Number)
const numbers = lines[1]
console.log(numbers.includes(target) ? "Yes" : "No")