const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [A, B, C] = input.split(' ')

console.log(C + B + A)