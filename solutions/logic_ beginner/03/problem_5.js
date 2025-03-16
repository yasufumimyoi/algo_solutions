const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [A, B] = input.split(' ')

console.log(A === B ? "Yes" : "No")