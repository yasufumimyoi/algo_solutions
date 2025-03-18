const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const [_, targetIndex] = lines[0].split(' ').map(Number)
const array = lines[1].split(' ')

console.log(array[targetIndex])