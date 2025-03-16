const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [A, B, C, D] = input.split(' ')
const workingTime = B - A
const breakTime = D - C

console.log(workingTime - breakTime)
